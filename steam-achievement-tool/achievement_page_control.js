/**
 * 點擊所有具有指定 value 屬性的按鈕 (僅針對可見的元素)
 * @param {string} valueName - 按鈕的 value 屬性值 (例如 "Upload" 或 "Save")
 */
function clickAllButtons(valueName) {
    // 選取所有 type 為 submit 且 value 為指定的 valueName 的按鈕
    const buttons = document.querySelectorAll(`input[type="submit"][value="${valueName}"]`);
    buttons.forEach(button => {
      // 僅當按鈕可見時 (offsetParent 不為 null) 才點擊，避免點到隱藏區塊內的按鈕
      if (button.offsetParent !== null) {
        button.click();
      }
    });
  }