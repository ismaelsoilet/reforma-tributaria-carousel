import puppeteer from 'puppeteer';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function run() {
    console.log('🚀 Iniciando exportação do Carrossel...');

    const outputDir = path.join(__dirname, 'output');
    if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
    }

    const browser = await puppeteer.launch({
        headless: 'new',
        args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-web-security']
    });

    try {
        const page = await browser.newPage();

        await page.setViewport({
            width: 1080,
            height: 1350,
            deviceScaleFactor: 2
        });

        const indexPath = 'file://' + path.join(__dirname, 'index.html');
        console.log(`📂 Abrindo: ${indexPath}`);
        await page.goto(indexPath, { waitUntil: 'networkidle0' });

        // Hide header and nav bar so they don't appear in screenshots
        await page.evaluate(() => {
            const header = document.getElementById('app-header');
            const navBar = document.getElementById('nav-bar');
            if (header) header.style.display = 'none';
            if (navBar) navBar.style.display = 'none';

            // Remove top margin from viewer since header is hidden
            const viewer = document.getElementById('viewer');
            if (viewer) viewer.style.marginTop = '0';

            // Ensure carousel mode
            if (typeof toggleViewMode === 'function') {
                toggleViewMode('carousel');
            }

            // Re-hide nav-bar (toggleViewMode may re-show it)
            if (navBar) navBar.style.display = 'none';
        });

        // 1. Generate individual slide images
        console.log('📸 Gerando imagens...');
        const numSlides = 6;
        for (let i = 0; i < numSlides; i++) {
            console.log(`   Slide ${i + 1}/${numSlides}...`);

            await page.evaluate((index) => {
                if (typeof goToSlide === 'function') goToSlide(index);
            }, i);

            await new Promise(r => setTimeout(r, 600));

            const slideElement = await page.$(`.slide#slide-${i + 1}`);
            if (slideElement) {
                await slideElement.screenshot({
                    path: path.join(outputDir, `slide-${i + 1}.png`),
                    type: 'png'
                });
                console.log(`   ✅ slide-${i + 1}.png`);
            } else {
                console.error(`   ❌ slide-${i + 1} não encontrado`);
            }
        }

        // 2. Generate unified PDF
        console.log('📄 Gerando PDF...');
        const pdfPath = path.join(outputDir, 'reforma-tributaria.pdf');

        await page.pdf({
            path: pdfPath,
            width: '1080px',
            height: '1350px',
            printBackground: true,
            displayHeaderFooter: false,
            margin: { top: '0px', right: '0px', bottom: '0px', left: '0px' }
        });

        console.log(`   ✅ ${pdfPath}`);
        console.log('\n🎉 Exportação concluída!');

    } catch (error) {
        console.error('❌ Erro:', error);
    } finally {
        await browser.close();
    }
}

run();
