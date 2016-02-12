using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(TableTennisTracker.Startup))]
namespace TableTennisTracker
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
