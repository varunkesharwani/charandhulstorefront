import React from 'react';
import logo from '../../../../../public/logo.png'; // Update the path as per your project structure

const Page = () => {
  return (
    <div className="text-black font-sans p-5">
      <header className="flex items-center mb-5">
        {/* <img src={logo.src} alt="Charandhul Logo" className="h-24 mr-5" /> */}
        <h1 className="text-[#023047] text-4xl font-bold">Charandhul</h1>
      </header>
      <section className="border p-5 mb-5">
        <p>
          We at Charandhul make lifestyle products that elevate your day-to-day living experience. We created a series of Brass, Copper, and Clay products ranging from kitchen to garden and from your corporate meetings to family gatherings. Our products and services help you heal through health, hygiene, and spirituality. All our products are manufactured by families pursuing these professions for generations. We work to bring the fast-moving urban India closer to its counterpart.
        </p>
      </section>
      <section className="p-5 border mb-5">
        <h2 className="text-2xl mb-2 font-semibold">Vision</h2>
        <p>
          &lsquo;What you can dream is what you can get&lsquo;. We at Charandhul believe in this motto and dream of creating an ecosystem that has deep-rooted cores, which values our traditions and is connected with our glorious past. The goal is to help grow India as a nation-state by providing everyone with pure and pious products that will not only benefit them but also supply oxygen to the dying cultures and urban villages.
        </p>
      </section>
      <section className="p-5 border">
        <h2 className="text-2xl mb-2 font-semibold">Privacy Policy</h2>
        <p>
          Charandhul.com (&apos;we&apos;, &apos;us&apos;, or &apos;our&apos;) is committed to protecting your privacy. This Privacy Policy outlines how we collect, use, disclose, and safeguard your information when you visit our website, Charandhul.com. Please read this policy carefully to understand our views and practices regarding your personal data and how we will treat it. By using our website, you agree to the collection and use of information in accordance with this policy.
        </p>
        <h3 className="text-xl mb-1 font-semibold">1. Information We Collect</h3>
        <p><strong>Personal Information</strong><br />
          We may collect the following personal information from you:<br />
          Name<br />
          Email address<br />
          Phone number<br />
          Billing and shipping addresses<br />
          Payment information (credit/debit card details)
        </p>
        <p><strong>Non-Personal Information</strong><br />
          We may collect non-personal information about you whenever you interact with our website. This may include the browser name, the type of computer, and technical information about your means of connection to our website, such as the operating system and the Internet service providers utilized.
        </p>
        <h3 className="text-xl mb-1 font-semibold">2. How We Use Your Information</h3>
        <p>
          We use the information we collect in the following ways:<br />
          To process and manage your orders, including delivery and returns.<br />
          To personalize your shopping experience.<br />
          To improve our website and customer service.<br />
          To send periodic emails regarding your order or other products and services.<br />
          To comply with legal obligations and resolve any disputes.
        </p>
        <h3 className="text-xl mb-1 font-semibold">3. Sharing Your Information</h3>
        <p>
          We do not sell, trade, or otherwise transfer to outside parties your personally identifiable information except in the following circumstances:<br />
          To trusted third parties who assist us in operating our website, conducting our business, or servicing you, as long as those parties agree to keep this information confidential.<br />
          When we believe release is appropriate to comply with the law, enforce our site policies, or protect ours or others&apos; rights, property, or safety.
        </p>
        <h3 className="text-xl mb-1 font-semibold">4. Data Security</h3>
        <p>
          We implement a variety of security measures to maintain the safety of your personal information. Your personal information is contained behind secure networks and is only accessible by a limited number of persons who have special access rights to such systems and are required to keep the information confidential. When you place orders or access your personal information, we offer the use of a secure server. All sensitive/credit information you supply is transmitted via Secure Socket Layer (SSL) technology and then encrypted into our database to be only accessed as stated above.
        </p>
        <h3 className="text-xl mb-1 font-semibold">5. Cookies</h3>
        <p>
          Our website may use &apos;cookies&apos; to enhance the user experience. Cookies are small files that a site or its service provider transfers to your computer&apos;s hard drive through your web browser (if you allow) that enables the site&apos;s or service provider&apos;s systems to recognize your browser and capture and remember certain information. You can choose to set your web browser to refuse cookies or to alert you when cookies are being sent. However, if you do so, note that some parts of the website may not function properly.
        </p>
        <h3 className="text-xl mb-1 font-semibold">6. Third-Party Links</h3>
        <p>
          Occasionally, at our discretion, we may include or offer third-party products or services on our website. These third-party sites have separate and independent privacy policies. We therefore have no responsibility or liability for the content and activities of these linked sites. Nonetheless, we seek to protect the integrity of our site and welcome any feedback about these sites.
        </p>
        <h3 className="text-xl mb-1 font-semibold">7. Your Rights</h3>
        <p>
          You have the right to:<br />
          Access the personal information we hold about you.<br />
          Request that we correct any inaccurate or incomplete information.<br />
          Request that we delete your personal information.<br />
          To exercise any of these rights, please contact us at support@charandhul.com. We will respond to your request within a reasonable timeframe and in accordance with applicable laws.
        </p>
        <h3 className="text-xl mb-1 font-semibold">8. Changes to This Privacy Policy</h3>
        <p>
          Charandhul.com reserves the right to update or modify this Privacy Policy at any time. If we make changes, we will post the updated policy on this page and update the Privacy Policy modification date below. We encourage you to review this Privacy Policy periodically to stay informed about how we are protecting your information.
        </p>
        <p><strong>Effective Date:</strong> 15/07/2024</p>
        <h3 className="text-xl mb-1 font-semibold">9. Contact Us</h3>
        <p>
          If you have any questions about this Privacy Policy, the practices of this site, or your dealings with this site, please contact us at:<br />
          Charandhul.com<br />
          Email: team@charandhul.com<br />
          Phone: 7004608819<br />
          Address: Plumeria Garden Estate, Omnicron 3, Greater Noida. 201310
        </p>
      </section>
    </div>
  );
};

export default Page;
