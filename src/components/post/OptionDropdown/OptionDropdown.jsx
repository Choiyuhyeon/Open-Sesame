import { useEffect, useRef, useState } from 'react';
import './OptionDropdown.css';
import OptionIcon from '@/assets/icons/icon-option.svg';

function OptionDropdown({ onClickEdit, onClickDelete }) {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleToggleDropdown = (e) => {
    e.stopPropagation();
    setOpen((prev) => !prev);
  };

  const handleClickEdit = (e) => {
    e.stopPropagation();
    setOpen(false);
    onClickEdit?.();
  };

  const handleClickDelete = (e) => {
    e.stopPropagation();
    setOpen(false);
    onClickDelete?.();
  };

  return (
    <div className="optionDropdown" ref={dropdownRef}>
      <button
        type="button"
        className="optionButton"
        onClick={handleToggleDropdown}
      >
        <img src={OptionIcon} alt="옵션 열기" className="optionButtonIcon" />
      </button>

      {open && (
        <ul className="optionMenu">
          <li>
            <button
              type="button"
              className="optionItem"
              onClick={handleClickEdit}
            >
              이름변경
            </button>
          </li>
          <li>
            <button
              type="button"
              className="optionItem"
              onClick={handleClickDelete}
            >
              탈퇴하기
            </button>
          </li>
        </ul>
      )}
    </div>
  );
}

export default OptionDropdown;