import CounterState from './A01028066/CounterState';
import UserFetcherEffect from './A01028066/UserFetcherEffect';
import ReducerCounter from './A01028066/ReducerCounter';
import ReducerUserForm from './A01028066/ReducerUserForm';

const App = () => (
  <div style={{ maxWidth: '700px', margin: '0 auto', padding: '20px' }}>
    <h1>Clase 3: React Hooks</h1>
    <CounterState />
    <hr />
    <UserFetcherEffect />
    <hr />
    <ReducerCounter />
    <hr />
    <ReducerUserForm />
  </div>
);

export default App;
