# Gráficos, MSAA e FPS

## MSAA até 8x

O seletor oferece Automático, 1x, 2x, 4x e 8x. A configuração usa FIntDebugForceMSAASamples. Automático remove a substituição, permitindo que o cliente escolha.

8x solicita oito amostras; não comprova que o renderizador adotou esse valor. O resultado depende da versão do Roblox, da API gráfica e da GPU. MSAA aumenta o custo de renderização e pode reduzir FPS. Compare uma cena antes e depois, sem mudar outras opções.

## Limite de FPS

O menu oficial do Roblox no Windows oferece ajuste de taxa de quadros até 240 FPS. Esse é o caminho documentado para o Player moderno: abra o menu da experiência, entre em Configurações e ajuste Taxa máxima de quadros.

O preset avançado do NRBlox grava uma solicitação em DFIntTaskSchedulerTargetFps. A lista de FastFlags permitidas pelo Roblox pode ignorar essa flag. A opção experimental “Sem limite” não remove restrições do motor, do driver, de VSync ou do servidor e não é uma garantia de FPS ilimitado. Consulte o valor produzido no editor antes de aplicar.

O NRBlox não altera memória, executável ou proteções do cliente para impor essas configurações.

## Player, Studio e Linux

O Player aplica uma lista de flags permitidas. O Studio tem regras diferentes. No Linux, o Sober usa outro cliente e a gravação em seu campo fflags não comprova suporte à mesma configuração do Windows.

## Fontes técnicas

- [Roblox: lista de FastFlags permitidas](https://devforum.roblox.com/t/allowlist-for-local-client-configuration-via-fast-flags/3966569/)
- [Roblox: avaliação de desempenho e FPS](https://create.roblox.com/docs/performance-optimization/identify)
- [Configuração do Sober](https://vinegarhq.org/Sober/Configuration/index.html)

[Voltar ao início](Home.md)
