using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using NRBlox.UI.ViewModels.Settings;

namespace NRBlox.UI.Elements.Settings.Pages
{
    /// <summary>
    /// Interaction logic for NRBloxPage.xaml
    /// </summary>
    public partial class NRBloxPage
    {
        public NRBloxPage()
        {
            DataContext = new NRBloxViewModel();
            InitializeComponent();
        }
    }
}

