```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    //Improved logging to track initial render
    console.log('Count:', count, 'Mount:', count === 0 ? 'initial' : 'update');
  }, [count]); 

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
```