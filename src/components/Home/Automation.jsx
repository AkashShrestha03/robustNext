import Link from 'next/link';
import React from 'react'

const Automation = () => {
  return (
    <div class="bg-d mt-5 Automation">
      <div>
        <h4 className="display-2">Robust Automation</h4>
        <p class="distribution-text">
          {" "}
          Take the manual work out of sending gifts with our custom API that
          automates robust distribution to your audience. Never miss another
          birthday, lead follow-up or thank you gift again. Together we are
          making robust smart.
        </p>
        <Link href="/automation">
          <button>Find Out More</button>
        </Link>
      </div>
    </div>
  );
}

export default Automation
