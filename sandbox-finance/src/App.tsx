import { AtBalanceTicker } from '@components/atoms/AtBalanceTicker';
import {
  MlAddTransactionForm,
  MlCategoryFilter,
  MlTransactionList,
} from '@components/molecules';
import { useTransactions } from '@hooks/useTransactions';
import { Container } from '@layout/container';
import './App.css';

const App = () => {
  const {
    filteredTransactions,
    activeCategory,
    setActiveCategory,
    addTransaction,
    balance,
  } = useTransactions();

  return (
    <div className='min-h-screen bg-stone-950 text-stone-100'>
      <Container className='py-8'>
        <header className='mb-8 text-center'>
          <h1 className='text-3xl font-bold tracking-tight text-stone-100'>
            ☢️ Apocalypse Fund
          </h1>
          <p className='text-stone-500 text-sm mt-1'>
            Track your survival resources
          </p>
        </header>

        <div className='mb-8'>
          <AtBalanceTicker balance={balance} />
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
          <div className='lg:col-span-2 space-y-4'>
            <MlCategoryFilter
              activeCategory={activeCategory}
              onFilter={setActiveCategory}
            />
            <MlTransactionList transactions={filteredTransactions} />
          </div>

          <div>
            <h2 className='text-sm font-medium text-stone-400 uppercase tracking-wider mb-4'>
              Log Transaction
            </h2>
            <MlAddTransactionForm onSubmit={addTransaction} />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default App;
