# Gráficos, MSAA e FPS

## MSAA até 8x

O seletor oferece Automático, 1x, 2x, 4x e 8x. A configuração usa FIntDebugForceMSAASamples. Automático remove a substituição, permitindo que o cliente escolha.

8x solicita oito amostras; não comprova que o renderizador adotou esse valor. O resultado depende da versão do Roblox, da API gráfica e da GPU. MSAA aumenta o custo de renderização e pode reduzir FPS. Compare uma cena antes e depois, sem mudar outras opções.

## Limite de FPS

O menu oficial do Roblox no Windows oferece ajuste de taxa de quadros até 240 FPS. Esse é o caminho documentado para o Player moderno: abra o menu da experiência, entre em Configurações e ajuste Taxa máxima de quadros.

O NRBlox não oferece mais presets acima de 240 FPS. A flag DFIntTaskSchedulerTargetFps não está na allowlist local atual do Roblox e é ignorada pelo cliente; por isso não existe um desbloqueio infinito confiável por ClientAppSettings.json. Use o menu do Roblox para selecionar até 240 FPS.

O NRBlox não altera memória, executável ou proteções do cliente para impor essas configurações.

## Player, Studio e Linux

O Player aplica uma lista de flags permitidas. O Studio tem regras diferentes. No Linux, o Sober usa outro cliente e a gravação em seu campo fflags não comprova suporte à mesma configuração do Windows.

## Fontes técnicas

- [Roblox: lista de FastFlags permitidas](https://devforum.roblox.com/t/allowlist-for-local-client-configuration-via-fast-flags/3966569/)
- [Roblox: avaliação de desempenho e FPS](https://create.roblox.com/docs/performance-optimization/identify)
- [Configuração do Sober](https://vinegarhq.org/Sober/Configuration/index.html)

[Voltar ao início](Home.md)
