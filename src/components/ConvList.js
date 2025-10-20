import React, { useEffect, useState } from "react";
import ConvItem from "./ConvItem";
import "./ConviList.scss";

const ConvList = () => {
  // 카카오 JavaScript API 키
  const KAKAO_API_KEY = "f21df4d9eb3323138cbc232871ea740c";

  const [articles, setArticles] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const chunkArray = (arr, size) => {
    const result = [];
    for (let i = 0; i < arr.length; i += size) {
      result.push(arr.slice(i, i + size));
    }
    return result;
  };

  useEffect(() => {
    // SDK 로드 여부 체크
    const loadKakaoSdk = () =>
      new Promise((resolve, reject) => {
        setLoading(true);
        // 카카오 지도 SDK가 이미 로드되어 있는지를 확인
        if (window.kakao && window.kakao.maps && window.kakao.maps.services) {
          resolve();
        } else {
          // 카카오 지도 SDK는 외부 JavaScript 라이브러리이기 때문에 이걸 사용하려면 HTML <script> 태그를 통해 SDK 파일을 불러와야 한다.
          const script = document.createElement("script");
          script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${KAKAO_API_KEY}&autoload=false&libraries=services`;
          // 스크립트가 비동기적으로 로드되도록 설정
          script.async = true;

          //  스크립트가 성공적으로 로드된 후 실행되는 함수 (SDK 초기화 확인)
          script.onload = () => {
            window.kakao.maps.load(() => {
              if (window.kakao.maps.services) {
                console.log("SDK 초기화 완료");
                resolve();
              } else {
                reject(
                  new Error("카카오 SDK 로드 후 services 모듈이 없습니다.")
                );
              }
            });
          };

          script.onerror = (e) => {
            console.error(" 카카오 SDK 로드 실패:", e);
            reject(e);
          };
          // <script> 태그를 브라우저의 <head> 태그에 삽입
          document.head.appendChild(script);
        }
        setLoading(false);
      });

    const fetchData = async () => {
      try {
        await loadKakaoSdk(); // SDK + services 로드

        const position = await new Promise((resolve, reject) => {
          navigator.geolocation.getCurrentPosition(
            resolve,
            (error) => {
              console.error("위치 정보를 가져올 수 없습니다:", error.message);
              reject(error);
            },
            {
              enableHighAccuracy: true, // 정확도 높게 요청
              timeout: 5000, // 5초 내 위치 못 받으면 실패 처리
              maximumAge: 0,
            }
          );
        });

        // 실제 위치를 저장하는 변수 - 위치가 부정확함
        // const lat = position.coords.latitude;
        // const lng = position.coords.longitude;

        // 하드코딩으로 직접 주소값 입력.
        const lat = 37.5012356; // 학원 위치
        const lng = 127.0250145; // 학원 위치

        const ps = new window.kakao.maps.services.Places();

        ps.keywordSearch(
          "편의점",
          // result : 검색된 장소 목록 (배열 형태), status: 검색 성공 여부
          (result, status) => {
            if (status === window.kakao.maps.services.Status.OK) {
              //   console.log("내 위치 주변 편의점:", result);
              setArticles(result); // 여기서 React state로 결과 저장
            } else {
              console.log(new Error("검색 실패: " + status));
            }
          },
          {
            location: new window.kakao.maps.LatLng(lat, lng), // 현재 위치 기반
            radius: 2000, // 반경 2km
            size: 6, // 최대 6개
          }
        );
      } catch (error) {
        console.error("편의점 검색 실패:", error);
        setError("편의점 정보를 불러오는 데 실패했습니다.");
      }
    };
    fetchData();
  }, []);

  // 렌더링
  if (loading) return <p>로딩 중...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <div>
      {articles &&
        chunkArray(articles, 2).map((pair, index) => (
          <div className="article-row" key={index}>
            {pair.map((article) => (
              <ConvItem key={article.id} article={article} />
            ))}
          </div>
        ))}
    </div>
  );
};

export default ConvList;
