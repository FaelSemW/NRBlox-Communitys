using NRBlox.UI.ViewModels.About;
namespace NRBlox.UI.Elements.About.Pages
{
    public partial class AboutPage
    {
        public AboutPage() { DataContext = new AboutViewModel(); InitializeComponent(); }
    }
}
