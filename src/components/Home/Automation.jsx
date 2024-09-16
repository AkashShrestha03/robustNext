import Link from 'next/link';
import React from 'react'

const Automation = () => {
  return (
    <div class="bg-d Automation">
      <div>
        <h4>Robust Automation</h4>
        <p class="distribution-text">
          {" "}
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Necessitatibus, enim!
        </p>
        <Link href="/automation">
          <button>Find Out More</button>
        </Link>
      </div>
    </div>
  );
}

export default Automation
