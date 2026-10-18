param([string]$Dotnet = 'dotnet')
$ErrorActionPreference = 'Stop'
$root = Split-Path $PSScriptRoot -Parent
Push-Location (Join-Path $root 'windows')
try {
    & $Dotnet publish NRBlox/NRBlox.csproj -c Release -r win-x64 --self-contained true -p:PublishSingleFile=true -p:IncludeNativeLibrariesForSelfExtract=true -p:IncludeAllContentForSelfExtract=true -p:EnableCompressionInSingleFile=true -p:DebugType=None -o (Join-Path $root 'release')
    if ($LASTEXITCODE -ne 0) { throw 'Falha na compilação.' }
} finally { Pop-Location }
Get-FileHash -LiteralPath (Join-Path $root 'release/NRBlox.exe') -Algorithm SHA256
