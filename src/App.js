import React from 'react';
import { Header } from './component/Header';
import { Balance } from './component/Balance';
import { IncomeExpenses } from './component/IncomeExpenses';
import { TranscationList } from './component/TransactionList';
import { AddTransaction } from './component/AddTransaction';
import { GlobalProvider } from './context/GlobalState';



import './App.css'

function App(){
  return(
    <GlobalProvider>
<Header/>
<div className="container">
<Balance/>
<IncomeExpenses />
<TranscationList/>
<AddTransaction/> 
</div>
    </GlobalProvider>
  )
}

export default App;