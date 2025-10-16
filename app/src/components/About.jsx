import './About.css';

export default function About() {
  // Generate outputs for loops
  const forOutput = [];
  for (let i = 0; i <= 10; i++) {
    forOutput.push(`Hello ${i}`);
  }

  const whileOutput = [];
  let number = 0;
  while (true) {
    whileOutput.push(`Hello ${number}`);
    number++;
    if (number >= 10) break;
  }

  // Generate outputs for functions
  const greetOutput = [];
  function greet(name) {
    greetOutput.push(`Hello, ${name}!`);
  }
  greet("Justin");

  const addOutput = [];
  const add = (a, b) => a + b;
  addOutput.push(add(5, 3)); // 8

  return (
    <section id="about">
      <h1 className="abt">About</h1>

      {/* Loops Section */}
      <div className="section">
        <h2 className="section-title">🔁 Loops</h2>
        <p className="txt">
          Loops are used to repeatedly execute a block of code until a specified condition is met.
        </p>

        <h3 className="examples">Examples</h3>
        <div className="codes">
          {/* For Loop */}
          <h4>For Loop</h4>
          <p><strong>Definition:</strong> A <code>for</code> loop repeats a block of code a specific number of times, usually when you know how many times you want it to run.</p>
          <p><strong>How it works:</strong> It runs the initialization once, checks the condition each time, runs the code if the condition is true, and updates the counter after each run.</p>
          <pre>
            <code>{`for (let i = 0; i <= 10; i++) {
  console.log(\`Hello \${i}\`);
}`}</code>
          </pre>
          <p><strong>Output:</strong></p>
          <pre className='margin'>
            <code>{forOutput.join('\n')}</code>
          </pre>

          {/* While Loop */}
          <h4>While Loop</h4>
          <p><strong>Definition:</strong> A <code>while</code> loop runs a block of code as long as a specified condition is true, often used when you don't know how many times it should run.</p>
          <p><strong>How it works:</strong> It checks the condition before each run and keeps looping until the condition becomes false or a <code>break</code> statement stops it.</p>
          <pre>
            <code>{`let number = 0;
while (true) {
  console.log(\`Hello \${number}\`);
  number++;
  if (number >= 10) {
    break;
  }
}`}</code>
          </pre>
          <p><strong>Output:</strong></p>
          <pre>
            <code>{whileOutput.join('\n')}</code>
          </pre>
        </div>
      </div>

      {/* Functions Section */}
      <div className="section">
        <h2 className="section-title">⚙️ Functions</h2>
        <p className="txt">
          Functions are reusable blocks of code that perform a specific task. You can define a function once and call
          it whenever needed.
        </p>

        <h3 className="examples">Examples</h3>
        <div className="codes">
          <h4>Function Declaration</h4>
          <pre>
            <code>{`function greet(name) {
  console.log(\`Hello, \${name}!\`);
}

greet("Justin");`}</code>
          </pre>
          <p><strong>Output:</strong></p>
          <pre className='margin'>
            <code>{greetOutput.join('\n')}</code>
          </pre>

          <h4>Arrow Function</h4>
          <pre>
            <code>{`const add = (a, b) => {
  return a + b;
};

console.log(add(5, 3));`}</code>
          </pre>
          <p><strong>Output:</strong></p>
          <pre>
            <code>{addOutput.join('\n')}</code>
          </pre>
        </div>
      </div>
    </section>
  );
}
