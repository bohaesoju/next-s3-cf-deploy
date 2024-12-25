"use client";
import { useEffect, useState } from "react";
import './ChristmasCard.css';

interface Snowflake {
  id: number;
  left: string;
  animationDuration: string;
  delay: string;
}

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [snowflakes, setSnowflakes] = useState<Snowflake[]>([]);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // 눈내리는 효과 초기화
  useEffect(() => {
    if (isClient) {
      const generateSnowflakes = () => {
        return Array.from({ length: 50 }, (_, i) => ({
          id: i,
          left: `${Math.random() * 100}%`,
          animationDuration: `${Math.random() * 3 + 2}s`,
          delay: `${Math.random() * 2}s`
        }));
      };
      setSnowflakes(generateSnowflakes());
    }
  }, [isClient]);

  // 서버 사이드 렌더링 시 기본 상태 반환
  if (!isClient) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-900 to-green-700 flex items-center justify-center p-4">
        <main className="relative z-10">
          <div className="w-80 bg-white rounded-xl shadow-xl">
            <div className="p-6 text-center">
              <h1 className="text-2xl font-bold text-red-700">Merry Christmas!</h1>
            </div>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-900 to-green-700 flex items-center justify-center p-4">
      {/* 눈내리는 효과 */}
      <div className="fixed inset-0 pointer-events-none">
        {snowflakes.map((snowflake) => (
          <div
            className="absolute w-1 h-1 bg-white rounded-full animate-fall"
            key={snowflake.id}
            style={{
              left: snowflake.left,
              animation: `fall ${snowflake.animationDuration} linear infinite`,
              animationDelay: snowflake.delay
            }}
          />
        ))}
      </div>

      {/* 메인 카드 */}
      <main className="relative z-10">
        <div className={`w-80 bg-white rounded-xl shadow-xl transform transition-transform duration-500 ${isOpen ? 'rotate-y-10 rotate-x-5' : ''}`}>
          {/* 카드 헤더 */}
          <div className="p-6 text-center">
            <h1 className="text-2xl font-bold text-red-700">Merry Christmas!</h1>
          </div>

          {/* 카드 바디 */}
          <div className="px-6 py-4">
            <p className="text-gray-700 mb-4">사랑하는 아내 다현 에게</p>
            <p className="text-gray-700 mb-6 leading-relaxed">
            크리스마스에도 일하느라 수고가 많아요~!<br/><br/>
            유안이를 늘 사랑으로 돌봐주고,<br/>
            우리의 둘째 베베도 잘 키워주고 있어서 고마워!<br/><br/>
            나의 아내로서도 늘 밝은 미소로 옆에 있어서 고마워요.<br/>
            여보가 있어 우리 가정이 더욱 따뜻하고 행복한거 알지?<br/><br/>
            사랑해 ~! <br/>
            메리 크리스마스!
          </p>

            {/* 크리스마스 트리 */}
            <div className="relative h-48 mb-6">
              <div className="absolute left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[60px] border-r-[60px] border-b-[100px] border-transparent border-b-green-700" />
              {/* 트리 장식들 */}
              {Array.from({ length: 12 }).map((_, i) => (
                <div
                  key={i}
                  className="absolute w-2 h-2 rounded-full animate-pulse"
                  style={{
                    left: `${Math.random() * 80 + 10}%`,
                    top: `${Math.random() * 80 + 10}%`,
                    backgroundColor: ['#ff0000', '#ffd700', '#ff69b4', '#4169e1'][Math.floor(Math.random() * 4)],
                  }}
                />
              ))}
              {/* 트리 별 */}
              <div className="absolute left-1/2 top-0 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-yellow-400 rounded-full animate-pulse" />
            </div>

            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="w-full py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors duration-300"
            >
              클릭
            </button>
          </div>

          {/* 카드 푸터 */}
          <div className="p-6 text-right text-gray-600">
            남편 의중이
          </div>
        </div>
      </main>

      <style jsx global>{`
        @keyframes fall {
          0% { transform: translateY(-100vh) rotate(0deg); }
          100% { transform: translateY(100vh) rotate(360deg); }
        }
      `}</style>
    </div>
  );
}
