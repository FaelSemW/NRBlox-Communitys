# NRBlox for Windows

NRBlox is a modified MIT-licensed fork of Bloxstrap v2.11.4. The original copyright and MIT terms remain in LICENSE. Upstream source: https://github.com/bloxstraplabs/bloxstrap . UI library source: https://github.com/bloxstraplabs/wpfui at f710123e72d9dcc8d09fccc4e2a783cc5cf5e652; its original license notices are retained in wpfui/.

Changes: NRBlox assembly, namespaces, executable, settings/storage/registry identity and visible branding; custom cyan N icon; navy/cyan theme, larger navigation; .NET 8 target. Upstream self-update and upstream analytics are disabled so the fork cannot silently become Bloxstrap or submit metrics under another project's identity. Roblox's own game update functionality remains in the bootstrapper.

Build: `dotnet build NRBlox/NRBlox.csproj -c Release` with .NET SDK 8.0.426 or compatible 8.x SDK. Publish: `dotnet publish NRBlox/NRBlox.csproj -c Release -r win-x64 --self-contained true -p:PublishSingleFile=true -o publish`.

The Windows bootstrapper preserves upstream source features including Player/Studio install and launch, fast flags, mods, appearance/themes, integrations, activity tracking, Discord presence, shortcuts, logs, export and uninstall. Their runtime compatibility still depends on Roblox services and policy. The source is not a claim of end-to-end feature certification.

## Third-party material

Roblox Player and Studio are proprietary and are downloaded separately from Roblox; they are not open-sourced by this project. Legacy Roblox cursors, sounds, icons and avatar background assets inherited under NRBlox/Resources are third-party material; their inclusion must not be represented as independent proof of an open-source license for those assets. Preserve existing upstream notices. Review redistribution rights before distributing a public release. Fonts and WPF UI components have their own notices in the source. NRBlox's new N icon is original geometric artwork distributed under the project's MIT terms.

Project links retained to Bloxstrap documentation describe upstream behavior, not NRBlox support or affiliation. Releases of this fork must be installed manually until an independently controlled release feed exists.

Compatibility: the existing BloxstrapRPC game log protocol and BloxstrapCustomBootstrapper XML root remain accepted, alongside NRBlox identifiers. Discord presence currently uses the upstream public application ID, so Discord may display the upstream application name. This does not send NRBlox metrics to Bloxstrap; a separate registered Discord application is required for independent Discord branding.
