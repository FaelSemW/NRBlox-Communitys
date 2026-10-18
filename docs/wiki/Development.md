# Desenvolvimento

O launcher usa C#, WPF e .NET 8. A biblioteca WPF UI é fornecida como fonte em windows/wpfui. Não há painel Electron nesta distribuição.

Para compilar no Windows com .NET SDK 8, execute scripts/build.ps1. O resultado é release/NRBlox.exe, um executável independente com dependências e wiki incluídas.

Edite a wiki em docs/wiki e execute node scripts/render-wiki.mjs para atualizar o HTML. A compilação incorpora esses arquivos como recursos. O botão Wiki extrai uma cópia local versionada para consulta offline.

Preserve as licenças existentes. Não inclua clientes Roblox, credenciais ou registros pessoais nos commits.

[Voltar ao início](Home.md)
