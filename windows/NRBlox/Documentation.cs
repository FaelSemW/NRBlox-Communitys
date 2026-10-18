using System.Reflection;

namespace NRBlox;

internal static class Documentation
{
    private static readonly Lazy<string> Home = new(Extract);
    public static string HomePath => Home.Value;

    private static string Extract()
    {
        var directory = Path.Combine(Paths.LocalAppData, App.ProjectName, "Documentation", App.Version);
        Directory.CreateDirectory(directory);
        var assembly = Assembly.GetExecutingAssembly();
        const string prefix = "NRBlox.Wiki.";
        foreach (var resource in assembly.GetManifestResourceNames().Where(name => name.StartsWith(prefix, StringComparison.Ordinal)))
        {
            var name = resource[prefix.Length..];
            if (Path.GetFileName(name) != name) throw new InvalidDataException("Invalid documentation resource name.");
            var destination = Path.Combine(directory, name);
            using var input = assembly.GetManifestResourceStream(resource)!;
            using var output = File.Create(destination);
            input.CopyTo(output);
        }
        var home = Path.Combine(directory, "Home.html");
        if (!File.Exists(home)) throw new FileNotFoundException("A documentação não está incluída nesta compilação.", home);
        return home;
    }
}
