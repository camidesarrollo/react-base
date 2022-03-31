import Page from '../Components/Pages';

function Home() {

    return (
      <Page
        className="DashboardPage"
        title="Dashboard"
        breadcrumbs={[{ name: 'Dashboard', active: true }]}
      />
    );
}
  
export default Home;
