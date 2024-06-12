import HeaderBox from "@/components/HeaderBox"
import RightSidebar from "@/components/RightSidebar"
import TotalBalanceBox from "@/components/TotalBalanceBox"

const Home = () => {
  const loggedIn = { firstName: 'Boyuan', lastName: 'SHI', email: 'contact@boyuanshi.com' }
  return (
    <section className='home'>
      <div className='home-content'>
        <header className='home-header'>
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstName || 'Guest'}
            subtext="开心搞笑的管理你的账单"
            />

            <TotalBalanceBox
              accounts={[]}
              totalBanks={1}
              totalCurrentBalance={1250.35}
              />
        </header>

        RECENT 
      </div>
      <RightSidebar
      user={loggedIn}
      trasactions={[]}
      banks={[{ currentBalance:123.50 }, {currentBalance:500}]}
      />
    </section>
  )
}

export default Home