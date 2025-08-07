import Layout from "@/components/Layout"
import SummaryCard from "@/components/SummaryCard"

const index = () => {
  return (
    <Layout>
      <section className="mb-8">
        <h2 className="text-lg font-semibold mb-4">Summary</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <SummaryCard
            label="Total Balance"
            value="$12,345"
            change="5%"
            changeType="positive"
          />
          <SummaryCard
            label="Total Credits"
            value="$7,890"
            change="3%"
            changeType="positive"
          />
          <SummaryCard
            label="Total Debits"
            value="$4,455"
            change="2%"
            changeType="negative"
          />
          <SummaryCard
            label="Transactions"
            value="150"
            change="10%"
            changeType="positive"
          />
        </div>
      </section>
    </Layout>

  )
}

export default index