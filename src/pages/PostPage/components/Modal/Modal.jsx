import CloseIcon from '../../../../assets/icons/Close.svg';

export function Modal() {
  return (
    <div className="modal">
      <div className="modal__heaader"></div>
      <div className="modal__title"></div>
      <button className="modal__close-button">
        <img src={CloseIcon} alt="닫기" />
      </button>
      <div className="modal__user-info"></div>
      <div className="modal_body">
        <div className="modal__input" />
        <button className="modal__submit-button" />
      </div>
    </div>
  );
}
