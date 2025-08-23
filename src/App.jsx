import React, { useState } from "react";

const LoveGreetingApp = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const generateLoveMessage = (userName) => {
    const messages = [
      `My dearest ${userName}, you are the kind of peace that cannot be found on silent shores or in empty rooms, for those are merely the absence of noise. 🌿  Your peace is a active, radiant calm that settles in my bones—the quiet certainty in your voice, the gentle understanding in your eyes, the way my entire being exhales when I am with you, as if I have finally come home after a long journey.💖`,
      `${userName}, you are the kind of beautiful that cannot be measured by mirrors 
because mirrors only capture faces,
while your beauty lives in your soul, your laughter, and the way the world feels softer when you walk into it. ✨

You are loved more than words can carry 
not just in the easy moments, but in the quiet ones,
the stormy ones, the ordinary ones.
You are loved in every heartbeat,
in every thought that drifts back to you,
in every tomorrow I dream of with you in it. 💖

You are not just beautiful 
you are the reason beauty exists in my eyes.
And you are not just loved 
you are the reason I have learned what true love feels like. 🌹
`,
      `${userName}, your beauty is not bound by mirrors,
it glows from the kindness in your soul,
the laughter that makes silence blossom,
the light that even the stars cannot rival. ✨

In every moment, you are loved 
not just when skies are clear,
but in storms, in quiet nights,
in every heartbeat that remembers you. ❤

No measure of words could ever capture it:
you are the reason I know beauty,
the reason I know love,
the reason tomorrow feels worth chasing. 🌹

Under heaven itself, there is none like you.
You are not just beautiful,
you are beauty 
and you are not just loved,
you are love. 💖`,
      `${userName}, I do not just miss you with my heart; I miss you with the entire universe of my being. My eyes miss the light you bring into a room, my hands miss the map of yours, my ears miss the symphony of your breath as you sleep. I am not just a person longing for another; I am a constellation of a thousand tiny aches, each one a testament to a part of me that only you can make whole again. 🌌`,
      `My darling ${userName}, Loving you is not a single chapter in my story; it is the ink that has bled into every page that came before and the hand that will guide the pen for every page to come. It has rewritten my past, making sense of every heartache and wrong turn, because they all led to you. And it authors my future, painting every dream, every hope, and every quiet morning in the golden hue of your name. 📖`,
      `To you my precious ${userName}, You are not a missing piece I was searching for, for I was never a broken puzzle. You are a whole new color I never knew existed, and now that I have seen it, my entire world is painted in its hue. You didn't complete me; you expanded me. You gave my soul new dimensions and my heart a new rhythm, and I am forever changed, not because I was lacking, but because I have been given the magnificent gift of knowing you. 🎨`,
      `To ${userName}, my love for you grows stronger with each passing day. 🌹`,
      `${userName}, you are the missing piece that completes my heart. 🧩`,
      `My heart skips a beat every time I think of you, ${userName}. 💘`,
      `${userName}, in your smile I see something more beautiful than the stars. ✨`,
      `For ${userName}, with all the love my heart can hold. 💌`,
      `${userName}, you are the answer to every prayer I've sent. 🙏`,
      `Loving you, ${userName}, is as natural as breathing. 💫`,
      `Every love story is beautiful, but ours is my favorite, ${userName}. 📖`,
      `${userName}, my love for you is a journey starting at forever and ending at never. 🌠`,
    ];

    return messages[Math.floor(Math.random() * messages.length)];
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim()) {
      setMessage(generateLoveMessage(name));
      setSubmitted(true);
    }
  };

  const handleReset = () => {
    setName("");
    setSubmitted(false);
    setMessage("");
  };
  const handlePrint = () => {
    const printContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <title>Love Message for ${name}</title>
        <style>
          @media print {
            body {
              margin: 0;
              padding: 20px;
              display: flex;
              justify-content: center;
              align-items: center;
              min-height: 100vh;
              background: linear-gradient(135deg, #fdf2f8 0%, #fce7f3 100%) !important;
              -webkit-print-color-adjust: exact;
              print-color-adjust: exact;
            }
            .print-card {
              width: 100%;
              max-width: 400px;
              background: white !important;
              border-radius: 24px;
              overflow: hidden;
              border: 8px solid white;
              box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
              -webkit-print-color-adjust: exact;
              print-color-adjust: exact;
            }
            .print-header {
              background: linear-gradient(to right, #ec4899 0%, #f472b6 100%) !important;
              padding: 24px;
              text-align: center;
              position: relative;
              -webkit-print-color-adjust: exact;
              print-color-adjust: exact;
            }
            .print-header h1 {
              color: white !important;
              font-size: 28px;
              font-weight: bold;
              margin: 0;
            }
            .print-header p {
              color: #fbcfe8 !important;
              margin: 8px 0 0 0;
            }
            .print-content {
              padding: 32px;
              text-align: center;
            }
            .print-message {
              background: #fdf2f8 !important;
              border: 1px solid #fbcfe8;
              border-radius: 16px;
              padding: 24px;
              position: relative;
              margin-bottom: 24px;
              -webkit-print-color-adjust: exact;
              print-color-adjust: exact;
            }
            .print-message p {
              color: #831843 !important;
              font-size: 18px;
              font-style: italic;
              font-weight: 500;
              margin: 0;
            }
            .heart-decoration {
              font-size: 40px;
              margin-bottom: 16px;
              animation: none;
            }
            .print-footer {
              background: #fce7f3 !important;
              padding: 16px;
              text-align: center;
              color: #ec4899 !important;
              font-size: 14px;
              -webkit-print-color-adjust: exact;
              print-color-adjust: exact;
            }
            .no-print {
              display: none !important;
            }
            @page {
              margin: 0;
              size: auto;
            }
          }
        </style>
      </head>
      <body>
        <div class="print-card">
          <div class="print-header">
            <div style="position: absolute; top: 16px; left: 16px; font-size: 24px; color: white;">💖</div>
            <div style="position: absolute; top: 16px; right: 16px; font-size: 24px; color: white;">💖</div>
            <h1>Love Greetings</h1>
            <p>Your personal love message</p>
          </div>
          
          <div class="print-content">
            <div class="heart-decoration">💖</div>
            <h2 style="font-size: 24px; font-weight: bold; color: #be185d; margin-bottom: 16px;">For ${name}</h2>
            
            <div class="print-message">
              <div style="position: absolute; top: 8px; left: 8px; font-size: 24px; color: #f9a8d4;">❝</div>
              <div style="position: absolute; bottom: 8px; right: 8px; font-size: 24px; color: #f9a8d4;">❞</div>
              <p>${message}</p>
            </div>
          </div>
          
          <div class="print-footer">
            Made with 💝 for someone special
          </div>
        </div>
      </body>
      </html>
    `;

    const printWindow = window.open("", "_blank");
    printWindow.document.write(printContent);
    printWindow.document.close();

    // Wait for content to load before printing
    printWindow.onload = function () {
      printWindow.focus();
      printWindow.print();
      printWindow.onafterprint = function () {
        printWindow.close();
      };
    };
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-red-50 flex items-center justify-center p-4">
      <div className="relative w-full max-w-md">
        {/* Decorative elements */}
        <div className="absolute -top-10 -left-10 w-20 h-20 bg-pink-200 rounded-full opacity-70"></div>
        <div className="absolute -bottom-10 -right-10 w-24 h-24 bg-red-200 rounded-full opacity-70"></div>

        {/* Main card */}
        <div className="relative bg-white rounded-3xl shadow-xl overflow-hidden border-8 border-white transform hover:scale-105 transition-transform duration-300">
          {/* Card header with heart design */}
          <div className="bg-gradient-to-r from-pink-500 to-red-400 p-6 text-center relative">
            <div className="absolute top-4 left-4 text-white text-2xl">💖</div>
            <div className="absolute top-4 right-4 text-white text-2xl">💖</div>
            <h1 className="text-3xl font-bold text-white">Love Greetings</h1>
            <p className="text-pink-100 mt-2">Your personal love message</p>
          </div>

          {/* Card content */}
          <div className="p-8">
            {!submitted ? (
              <div className="text-center">
                <div className="mb-6">
                  <div className="text-5xl mb-2">💌</div>
                  <p className="text-gray-600">
                    Enter your name to receive a special love message
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Your beautiful name..."
                      className="w-full px-4 py-3 border border-pink-200 rounded-lg focus:ring-2 focus:ring-pink-400 focus:border-transparent outline-none transition-all text-center text-lg"
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-pink-500 text-white py-3 px-6 rounded-lg font-semibold hover:bg-pink-600 transition-colors transform hover:scale-105 duration-200 shadow-md"
                  >
                    Generate Love Message 💝
                  </button>
                </form>
              </div>
            ) : (
              <div className="text-center">
                <div className="mb-6 animate-pulse">
                  <div className="text-5xl mb-4">💖</div>
                  <h2 className="text-2xl font-bold text-pink-700">
                    For {name}
                  </h2>
                </div>

                <div className="bg-pink-50 border border-pink-200 rounded-xl p-6 mb-8 relative">
                  <div className="absolute top-2 left-2 text-pink-300 text-2xl">
                    ❝
                  </div>
                  <div className="absolute bottom-2 right-2 text-pink-300 text-2xl">
                    ❞
                  </div>
                  <p className="text-lg text-pink-900 italic font-medium">
                    {message}
                  </p>
                </div>

                <div className="flex space-x-4">
                  <button
                    onClick={handleReset}
                    className="flex-1 bg-gray-500 text-white py-3 px-6 rounded-lg font-semibold hover:bg-gray-600 transition-colors"
                  >
                    Start Over
                  </button>
                  <button
                    onClick={handlePrint}
                    className="flex-1 bg-pink-400 text-white py-3 px-6 rounded-lg font-semibold hover:bg-pink-500 transition-colors"
                  >
                    Print Message
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Card footer */}
          <div className="bg-pink-100 p-4 text-center text-pink-500 text-sm">
            Made with 💝 for {name || "You"}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoveGreetingApp;
