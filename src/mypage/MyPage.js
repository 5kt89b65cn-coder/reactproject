import React, { useState } from "react";
import Header from "../components/Header";
import "./MyPage.css";

const MyPage = ({ reviews, onInsert, onDelete, onToggle }) => {
  const favoriteMenus = reviews.filter((r) => r.isFavorite);
  const myReviews = reviews.filter((r) => !r.isMyReview);

  const [editingId, setEditingId] = useState(null);
  const [editText, setEditText] = useState("");

  const startEditing = (id, currentText) => {
    setEditingId(id);
    setEditText(currentText);
  };

  const cancelEditing = () => {
    setEditingId(null);
    setEditText("");
  };

  const saveEdit = (review) => {
    onInsert({
      ...review,
      text: editText,
    });
    cancelEditing();
  };

  return (
    <>
      <Header />
      <div className="my-page">
        <h3>즐겨찾기한 메뉴</h3>
        {favoriteMenus.length > 0 ? (
          <div className="favorite-menus-container">
            {favoriteMenus.map((fm) => (
              <div
                key={fm.id}
                className="preview-container"
                style={{ position: "relative" }}
              >
                <button
                  className="heart-button"
                  onClick={() => onToggle(fm.id)}
                >
                  ❤️
                </button>

                <img
                  src={fm.ramen.imgUrl}
                  alt={fm.ramen.name}
                  className="ramen-image"
                />
                <p>{fm.ramen.name}</p>

                <div className="toppings">
                  {fm.toppings.map((topping, idx) => (
                    <div key={idx} className="topping-item">
                      <img
                        src={topping.imgUrl}
                        alt={topping.name}
                        className="topping-image"
                      />
                      <p>{topping.name}</p>
                    </div>
                  ))}
                </div>

                <p className="total-price">총 가격: {fm.totalPrice}원</p>
              </div>
            ))}
          </div>
        ) : (
          <p>즐겨찾기한 메뉴가 없습니다.</p>
        )}

        <div className="my-reviews">
          <h3>내가 작성한 후기</h3>
          {myReviews.length === 0 ? (
            <p>작성한 후기가 없습니다.</p>
          ) : (
            myReviews.map((review) => (
              <div
                key={review.id}
                className="review-box"
                style={{ position: "relative" }}
              >
                <button
                  className={`heart-button ${review.isFavorite ? "liked" : ""}`}
                  onClick={() => onToggle(review.id)}
                >
                  {review.isFavorite ? "❤️" : "🤍"}
                </button>

                <img
                  src={review.ramen.imgUrl}
                  alt={review.ramen.name}
                  className="ramen-image"
                  style={{ width: "100px", height: "auto" }}
                />
                <h4>{review.ramen.name}</h4>

                <div className="toppings">
                  {review.toppings.map((topping, idx) => (
                    <img
                      key={idx}
                      src={topping.imgUrl}
                      alt={topping.name}
                      className="topping-image"
                      style={{
                        width: "50px",
                        height: "auto",
                        marginRight: "5px",
                      }}
                    />
                  ))}
                </div>

                {editingId === review.id ? (
                  <>
                    <textarea
                      value={editText}
                      onChange={(e) => setEditText(e.target.value)}
                    />
                    <button onClick={() => saveEdit(review)}>저장</button>
                    <button onClick={cancelEditing}>취소</button>
                  </>
                ) : (
                  <>
                    <p>{review.text}</p>
                    <div className="review-actions">
                      <button
                        onClick={() => startEditing(review.id, review.text)}
                      >
                        수정
                      </button>
                      <button onClick={() => onDelete(review.id)}>삭제</button>
                    </div>
                  </>
                )}
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default MyPage;
