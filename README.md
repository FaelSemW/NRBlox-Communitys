# NRBlox-Communitys

Launcher nativo NRBlox para Windows, com a interface compacta, ícone N e botões para Roblox, Roblox Studio e configurações.

[Baixar executável](https://github.com/FaelSemW/NRBlox-Communitys/releases/latest) · [Wiki](docs/wiki/Home.md) · [Discord](https://discord.gg/M8j8JnQSCx)

## Instalação

Baixe **NRBlox-Communitys-v0.2.0-win-x64.exe** na página Releases e execute. O arquivo inclui o runtime .NET e a wiki: não é necessário baixar DLLs ou instalar .NET separadamente. O assistente instala o launcher; Roblox e Studio são baixados separadamente quando necessários.

Requisitos: Windows 10/11 de 64 bits e conexão com a internet para instalar/atualizar o cliente Roblox. A compilação não tem assinatura digital.

## Recursos

- Interface Windows nativa em C#/WPF, com tema escuro e identidade NRBlox.
- Inicialização e atualização do Roblox Player e Studio.
- Configurações, mods, temas e integrações herdadas da base do launcher.
- MSAA até 8x e presets de FPS.
- Wiki offline incorporada ao executável e Discord da comunidade.

O preset de FPS “Sem limite” é uma **solicitação experimental**: o Roblox Player pode ignorar a flag. Ele não garante FPS ilimitado. O menu oficial do Roblox permite até 240 FPS. Consulte [Gráficos](docs/wiki/Graphics.md).

Anti-AFK está no roadmap, não implementado. Esta distribuição contém o launcher Windows; uma versão Linux desse launcher ainda não está disponível.

## Compilar

Requisito: .NET SDK 8, no Windows. A biblioteca WPF UI está incluída como código-fonte.

```powershell
.\scripts\build.ps1
```

O resultado fica em `release/NRBlox.exe`. O script gera um único executável independente, sem exigir .NET instalado no computador de destino.

## Documentação e licença

A wiki fica em `docs/wiki`. Para atualizar o HTML offline após editar Markdown, use `node scripts/render-wiki.mjs`.

Código novo sob MIT. Os avisos legais da base e das dependências são preservados em LICENSE, windows/LICENSE e THIRD_PARTY_NOTICES.md. NRBlox Community é um projeto independente e não afiliado à Roblox Corporation.
