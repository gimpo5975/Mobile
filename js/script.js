//햄버거 버튼
$ (document).ready (function () {
  $ ('.nav .menu-trigger').click (function () {
    if ($ (this).hasClass ('active')) {
      $ (this).removeClass ('active');
    } else {
      $ (this).addClass ('active');
    }
  });
});
