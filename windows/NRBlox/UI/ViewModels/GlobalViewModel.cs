using System.Windows.Input;
using CommunityToolkit.Mvvm.Input;

namespace NRBlox.UI.ViewModels
{
    public static class GlobalViewModel
    {
        public static string WikiUri => new Uri(Documentation.HomePath).AbsoluteUri;
        public static ICommand OpenWebpageCommand => new RelayCommand<string>(OpenWebpage);

        private static void OpenWebpage(string? location)
        {
            if (location is null)
                return;

            Utilities.ShellExecute(location);
        }
    }
}

