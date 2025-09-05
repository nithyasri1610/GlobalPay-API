import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [customers, setCustomers] = useState<any[]>([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    axios.get('http://localhost:8080/api/customers', {
      headers: { Authorization: 'Bearer FAKE_TOKEN' }
    }).then(res => setCustomers(res.data));
  }, []);

  const addCustomer = async () => {
    const res = await axios.post('http://localhost:8080/api/customers',
      { name, email },
      { headers: { Authorization: 'Bearer FAKE_TOKEN' } }
    );
    setCustomers([...customers, res.data]);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">GlobalPay Dashboard</h1>
      <div className="mb-4">
        <input value={name} onChange={e => setName(e.target.value)} placeholder="Name" className="border p-2 mr-2"/>
        <input value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" className="border p-2 mr-2"/>
        <button onClick={addCustomer} className="bg-blue-500 text-white px-4 py-2">Add Customer</button>
      </div>
      <ul>
        {customers.map(c => <li key={c.id}>{c.name} ({c.email})</li>)}
      </ul>
    </div>
  );
}

export default App;
