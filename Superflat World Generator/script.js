const translations = {
    pl: {
        backHome: "<- Powrót do strony głównej",
        title: "Generator Superflat World",
        subtitle: "Stwórz własny kod świata płaskiego dla Minecraft (Java Edition)",
        layersTitle: "Warstwy świata (od dołu do góry)",
        addLayer: "Dodaj warstwę",
        biomeTitle: "Ustawienia biomu",
        biomeSearch: "Wyszukaj biom...",
        outputTitle: "Wygenerowany kod",
        copyBtn: "Skopiuj kod",
        copied: "Skopiowano kod do schowka!",
        noResults: "Brak wyników",
        maxBlocks: "Maksymalna liczba bloków"
    },
    en: {
        backHome: "<- Back to home page",
        title: "Superflat World Generator",
        subtitle: "Create your own flat world code for Minecraft (Java Edition)",
        layersTitle: "World Layers (bottom to top)",
        addLayer: "Add Layer",
        biomeTitle: "Biome Settings",
        biomeSearch: "Search biome...",
        outputTitle: "Generated Code",
        copyBtn: "Copy Code",
        copied: "Code copied to clipboard!",
        noResults: "No results",
        maxBlocks: "Max blocks reached"
    },
    de: {
        backHome: "<- Zurück zur Startseite",
        title: "Superflat Welt Generator",
        subtitle: "Erstelle deinen eigenen flachen Weltcode für Minecraft (Java Edition)",
        layersTitle: "Weltenschichten (von unten nach oben)",
        addLayer: "Schicht hinzufügen",
        biomeTitle: "Biom-Einstellungen",
        biomeSearch: "Biom suchen...",
        outputTitle: "Generierter Code",
        copyBtn: "Code kopieren",
        copied: "Code in die Zwischenablage kopiert!",
        noResults: "Keine Ergebnisse",
        maxBlocks: "Maximale Blockanzahl"
    },
    es: {
        backHome: "<- Volver a la página principal",
        title: "Generador de Mundo Superplano",
        subtitle: "Crea tu propio código de mundo plano para Minecraft (Java Edition)",
        layersTitle: "Capas del mundo (de abajo a arriba)",
        addLayer: "Añadir capa",
        biomeTitle: "Configuración del bioma",
        biomeSearch: "Buscar bioma...",
        outputTitle: "Código generado",
        copyBtn: "Copiar código",
        copied: "¡Código copiado al portapapeles!",
        noResults: "Sin resultados",
        maxBlocks: "Máximo de bloques"
    },
    ru: {
        backHome: "<- На главную страницу",
        title: "Генератор суперплоского мира",
        subtitle: "Создайте свой код плоского мира для Minecraft (Java Edition)",
        layersTitle: "Слои мира (снизу вверх)",
        addLayer: "Добавить слой",
        biomeTitle: "Настройки биома",
        biomeSearch: "Поиск биома...",
        outputTitle: "Сгенерированный код",
        copyBtn: "Скопировать код",
        copied: "Код скопирован в буфер обмена!",
        noResults: "Нет результатов",
        maxBlocks: "Максимум блоков"
    },
    pt: {
        backHome: "<- Voltar para a página inicial",
        title: "Gerador de Mundo Superplano",
        subtitle: "Crie o seu próprio código de mundo plano para Minecraft (Java Edition)",
        layersTitle: "Camadas do mundo (de baixo para cima)",
        addLayer: "Adicionar camada",
        biomeTitle: "Configurações de bioma",
        biomeSearch: "Pesquisar bioma...",
        outputTitle: "Código gerado",
        copyBtn: "Copiar código",
        copied: "Código copiado para a área de transferência!",
        noResults: "Sem resultados",
        maxBlocks: "Máximo de blocos"
    },
    mg: {
        backHome: "<- Miverina amin'ny pejy fandraisana",
        title: "Mpamokatra Tontolo Superflat",
        subtitle: "Mamorona ny kaody tontolo fisaka ho an'ny Minecraft (Java Edition)",
        layersTitle: "Sosona tontolo (avy ambany ka hatrany ambony)",
        addLayer: "Manampy sosona",
        biomeTitle: "Fikirakirana biome",
        biomeSearch: "Mitady biome...",
        outputTitle: "Kaody novokarina",
        copyBtn: "Adikao ny kaody",
        copied: "Adika tao amin'ny fitadidiana ny kaody!",
        noResults: "Tsy misy valiny",
        maxBlocks: "Blokely ambony indrindra"
    }
};

let currentLang = 'en'; // Zmieniono domyślny język na angielski

const availableBlocks = [
    "minecraft:air",
    "minecraft:stone",
    "minecraft:granite",
    "minecraft:diorite",
    "minecraft:andesite",
    "minecraft:deepslate",
    "minecraft:cobblestone",
    "minecraft:bedrock",
    "minecraft:dirt",
    "minecraft:coarse_dirt",
    "minecraft:podzol",
    "minecraft:rooted_dirt",
    "minecraft:mud",
    "minecraft:grass_block",
    "minecraft:sand",
    "minecraft:red_sand",
    "minecraft:sandstone",
    "minecraft:red_sandstone",
    "minecraft:gravel",
    "minecraft:clay",
    "minecraft:ice",
    "minecraft:packed_ice",
    "minecraft:blue_ice",
    "minecraft:snow_block",
    "minecraft:water",
    "minecraft:lava",
    "minecraft:oak_log",
    "minecraft:spruce_log",
    "minecraft:birch_log",
    "minecraft:jungle_log",
    "minecraft:acacia_log",
    "minecraft:dark_oak_log",
    "minecraft:mangrove_log",
    "minecraft:cherry_log",
    "minecraft:oak_leaves",
    "minecraft:spruce_leaves",
    "minecraft:birch_leaves",
    "minecraft:coal_ore",
    "minecraft:iron_ore",
    "minecraft:copper_ore",
    "minecraft:gold_ore",
    "minecraft:redstone_ore",
    "minecraft:emerald_ore",
    "minecraft:lapis_ore",
    "minecraft:diamond_ore",
    "minecraft:netherrack",
    "minecraft:soul_sand",
    "minecraft:soul_soil",
    "minecraft:basalt",
    "minecraft:blackstone",
    "minecraft:magma_block",
    "minecraft:nether_quartz_ore",
    "minecraft:end_stone",
    "minecraft:purpur_block",
    "minecraft:obsidian",
    "minecraft:glowstone",
    "minecraft:quartz_block"
];

const availableBiomes = [
    "minecraft:the_void",
    "minecraft:plains",
    "minecraft:desert",
    "minecraft:forest",
    "minecraft:flower_forest",
    "minecraft:taiga",
    "minecraft:snowy_plains",
    "minecraft:savanna",
    "minecraft:jungle",
    "minecraft:badlands",
    "minecraft:swamp",
    "minecraft:mangrove_swamp",
    "minecraft:cherry_grove",
    "minecraft:mushroom_fields",
    "minecraft:nether_wastes",
    "minecraft:soul_sand_valley",
    "minecraft:basalt_deltas",
    "minecraft:crimson_forest",
    "minecraft:warped_forest",
    "minecraft:the_end",
    "minecraft:small_end_islands",
    "minecraft:end_barrens",
    "minecraft:end_highlands",
    "minecraft:end_midlands",
    "minecraft:ocean",
    "minecraft:deep_ocean",
    "minecraft:warm_ocean",
    "minecraft:frozen_ocean"
];

let layers = [
    { count: 1, block: "minecraft:bedrock" },
    { count: 2, block: "minecraft:dirt" },
    { count: 1, block: "minecraft:grass_block" }
];

function updateTexts() {
    const t = translations[currentLang];
    document.getElementById('htmlRoot').setAttribute('lang', currentLang);

    document.getElementById('ui-back-btn').textContent = t.backHome;
    document.getElementById('ui-title').textContent = t.title;
    document.getElementById('ui-subtitle').textContent = t.subtitle;
    document.getElementById('ui-layers-title').textContent = t.layersTitle;
    document.getElementById('ui-add-layer').textContent = t.addLayer;
    document.getElementById('ui-biome-title').textContent = t.biomeTitle;
    document.getElementById('biomeSearch').placeholder = t.biomeSearch;
    document.getElementById('ui-output-title').textContent = t.outputTitle;
    document.getElementById('ui-copy-btn').textContent = t.copyBtn;
    document.getElementById('maxBlocksText').textContent = t.maxBlocks;
}

document.getElementById('langSelect').addEventListener('change', (e) => {
    currentLang = e.target.value;
    updateTexts();
});

// Ustawienie wybranej opcji w select na starcie, aby pasowała do 'en'
document.getElementById('langSelect').value = 'en';

function checkTotalLimit() {
    let total = layers.reduce((sum, l) => sum + l.count, 0);
    const addBtn = document.getElementById('ui-add-layer');
    const maxText = document.getElementById('maxBlocksText');

    if (total >= 383) {
        addBtn.disabled = true;
        maxText.style.display = 'inline';
    } else {
        addBtn.disabled = false;
        maxText.style.display = 'none';
    }
}

function renderLayers() {
    const container = document.getElementById('layersContainer');
    container.innerHTML = '';

    layers.forEach((layer, index) => {
        const item = document.createElement('div');
        item.className = 'layer-item';

        const countInput = document.createElement('input');
        countInput.type = 'number';
        countInput.min = '1';
        countInput.value = layer.count;
        
        let otherLayersSum = 0;
        layers.forEach((l, i) => {
            if (i !== index) otherLayersSum += l.count;
        });
        countInput.max = 383 - otherLayersSum;

        countInput.onchange = (e) => {
            let val = parseInt(e.target.value) || 1;
            if (val < 1) val = 1;

            if (otherLayersSum + val > 383) {
                val = 383 - otherLayersSum;
            }

            layers[index].count = val;
            renderLayers();
            generateCode();
        };

        const select = document.createElement('select');
        availableBlocks.forEach(b => {
            const opt = document.createElement('option');
            opt.value = b;
            opt.textContent = b;
            if (b === layer.block) opt.selected = true;
            select.appendChild(opt);
        });
        select.onchange = (e) => {
            layers[index].block = e.target.value;
            generateCode();
        };

        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'X';
        removeBtn.className = 'btn-danger';
        removeBtn.onclick = () => {
            if (layers.length > 1) {
                layers.splice(index, 1);
                renderLayers();
                generateCode();
            }
        };

        item.appendChild(countInput);
        item.appendChild(select);
        item.appendChild(removeBtn);
        container.appendChild(item);
    });

    checkTotalLimit();
}

function addLayer() {
    let currentTotal = layers.reduce((sum, l) => sum + l.count, 0);
    if (currentTotal >= 383) return;

    layers.push({ count: 1, block: "minecraft:stone" });
    renderLayers();
    generateCode();
}

function generateCode() {
    const layersStr = layers.map(l => {
        if (l.count === 1) {
            return l.block;
        }
        return `${l.count}*${l.block}`;
    }).join(',');

    const biome = document.getElementById('biomeSelect').value;
    const code = `${layersStr};${biome}`;

    document.getElementById('output').textContent = code;
}

function copyCode() {
    const text = document.getElementById('output').textContent;
    navigator.clipboard.writeText(text).then(() => {
        alert(translations[currentLang].copied);
    });
}

const biomeSearch = document.getElementById('biomeSearch');
const biomeSelect = document.getElementById('biomeSelect');

biomeSearch.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase();
    biomeSelect.innerHTML = '';

    const filtered = availableBiomes.filter(b => b.toLowerCase().includes(query));
    
    filtered.forEach(b => {
        const opt = document.createElement('option');
        opt.value = b;
        opt.textContent = b;
        biomeSelect.appendChild(opt);
    });

    if (filtered.length === 0) {
        const opt = document.createElement('option');
        opt.disabled = true;
        opt.textContent = translations[currentLang].noResults;
        biomeSelect.appendChild(opt);
    }

    generateCode();
});

biomeSelect.addEventListener('change', generateCode);

updateTexts();
renderLayers();
generateCode();
