<template>
  <div>
    <div class="info">
      <h4><label col-form-label> Данные объективного обследования</label></h4>

      <div class="form-group row">
        <label class="col-sm-1 col-form-label">Шифр пациента</label>
        <div class="col-sm-1">
          <input type="text" id="price" required class="form-control">
        </div>
      </div>
      <td class="trans">
        <a href="#" class="spoiler-trigger"><span>Инструкция</span></a>
        <div class="spoiler-block">
          <h5> Динамометрия: </h5>
          <h5> Динанометр берут в руку циферблатом внутрь.</h5>
          <h5> Руку вытягивают в сторону на уровне плеча и максимално сжимают динамометр.</h5>
          <h5> Проводят по 2 измерения на каждой руке, фиксируют лучший результат.</h5>
          <h5> Тест "Встань и иди": </h5>
          <h5> Пациента просят встать со стула без помощи рук, пройти три метра, вернуться назад и сесть на стул.</h5>
          <h5> При ходьбе пациент использует обычные для себя средства помощи.</h5>
          <h5> Способность поддерживать равновесие: </h5>
          <h5> В положении стоя пациент опирается на одну ногу при разведенных в сторону руках и отведенной
            противоположной
            ноге.</h5>
          <h5> Скорость ходьбы: </h5>
          <h5> Отметьте на полу расстояние 10 метров; затем отметьте 2 метра от начала и 2 метра от конца этого
            расстояния.
          </h5>
          <h5>Начинайте отсчет времени, когда пациент пересечет первую 2-х метровую отметку и заканчивайте отсчет
            времени,
            когда пациент пересечет вторую 2-х метровую отметку. </h5>
          <h5>Таким образом, вы измерите время, в течение которого пациент проходит 6 метров (2 метра в начале и 2 метра
            в
            конце пути не учитываются, в связи с ускорением и замедлением пациента). </h5>
          <h5>Для расчета скорости ходьбы разделите 6 на время (в секундах), в течение которого пациент прошел 6 метров.
          </h5>
        </div>
      </td>
      <h3>&nbsp; Динамометрия</h3>

      <table>
        <tr>
          <td>&nbsp;
            <div class="form-group row">
              <label class="col-sm-4 col-form-label">Правая рука</label>кг
              <div class="col-sm-2">
                <input type="text" id="price" required class="form-control">
                <center>1</center>
              </div>
              <div class="col-sm-2">
                <input type="text" id="price" required class="form-control">
                <center>2</center>
              </div>
            </div>
            <div class="form-group row">
              <label class="col-sm-4 col-form-label"> Левая рука</label>кг
              <div class="col-sm-2">
                <input type="text" id="price" required class="form-control">
                <center>1</center>
              </div>
              <div class="col-sm-2">
                <input type="text" id="price" required class="form-control">
                <center>2</center>
              </div>
            </div>

          <td>
            <div class="form-group row">
              <label class="col-sm-4 col-form-label">ФИО лица, заполнившего данные</label>
              <div class="col-sm-7">
                <input type="text" id="price" required class="form-control">
              </div>
            </div>
            <div class="form-group row">
              <label class="col-sm-4 col-form-label">Дата заполнения</label>
              <div class="col-sm-7">
                <input type="date" class="form-control">
              </div>
            </div>
          </td>
        </tr>
        <tr>
          <td colspan="2" height="30" class="trans">
            <h3> Тест "Встань и иди" </h3>
            <div class="form-group row">
              <label class="col-sm-2 col-form-label"> Результат</label>сек
              <div class="col-sm-1">
                <input type="text" id="price" required class="form-control">
              </div>

            </div>
        </tr>
        <tr>
          <td colspan="2" height="30" class="trans">
            <h3>&nbsp;&nbsp;&nbsp;&nbsp; Равновесие </h3>
            <div class="form-group row">
              <label class="col-sm-2 col-form-label"> Результат</label>сек
              <div class="col-sm-1">
                <input type="text" id="price" required class="form-control">
              </div>

            </div>
        </tr>
        <tr>
          <td colspan="2" height="30" class="trans">
            <h3> &nbsp;&nbsp;Скорость ходьбы </h3>
            <div class="form-group row">
              <label class="col-sm-2 col-form-label"> Результат</label>м/c
              <div class="col-sm-1">
                <input type="text" id="price" required class="form-control">
              </div>
            </div>
          <td class="trans">
            <div class="col-sm-3">
              <button class="btn btn-block btn-success">Сохранить</button>
            </div>
            <div class="col-sm-5"> <a href="шкаладепрессии.html" class="tree">
                <button class="btn btn-block btn-info">Перейти к заполнению "Шкала депрессии"</button>
            </div>
          </td>
        </tr>
      </table>

    </div>
</template>

<style>
  .navbar-brand {
    position: relative;
    z-index: 2;
  }

  .navbar-nav.navbar-right .btn {
    position: relative;
    z-index: 2;
    padding: 4px 20px;
    margin: 10px auto;
  }

  .navbar .navbar-collapse {
    position: relative;
  }

  .navbar .nav-collapse {
    padding-left: 100px;
  }

  .navbar.navbar-default .nav-collapse {
    background-color: #f8f8f8;
  }

  .navbar.navbar-inverse .nav-collapse {
    background-color: #222;
  }

  .btn.btn-circle {
    border-radius: 50px;
  }

  .btn.btn-outline {
    background-color: transparent;
  }

  .spoiler-trigger {
    color: #0b70db;
    text-decoration: none;
    padding-left: 15px;
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAJCAYAAADgkQYQAAAANUlEQVQoU2PkLrj9n4EAYAQp+jpBlRGXOpA8hiJ0TaQrwuY2kDNINwnmcKLchO5LuHWEwgkAlO5FBwhFaI8AAAAASUVORK5CYII=) no-repeat 0 50%;
  }

  .spoiler-trigger.active {
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAJCAYAAADgkQYQAAAAKklEQVQoU2PkLrj9n4EAYAQp+jpBlRGXOpA8DRRhcxvIGTSyjqDvCIUTAEcINQcERZkIAAAAAElFTkSuQmCC);
  }

  .spoiler-trigger>span {
    border-bottom: 1px dashed #0b70db;
    padding: 0 3px;
  }

  .spoiler-trigger:hover>span {
    border-bottom-style: solid;
  }

  .spoiler-block {
    display: none;
  }

  .trans {
    opacity: 1;
    /* Непрозрачность ячеек */
    filter: alpha(Opacity=100);
    /* Для IE */
  }

  table {
    width: 75%;
    table-layout: fixed;
    /* Ширина таблицы */
  }

  .navbar-vertical-left {
    position: absolute;
    left: 2;
    top: 62;
    width: 100%;
    width: 265px;
    overflow: hidden;
    border: none;
    border-radius: 0;
    margin: 0;
  }

  .navbar-vertical-left ul.navbar-nav {
    width: 400%;
    height: 100%;
    display: table;
    margin: 0;
  }

  .navbar-vertical-left ul.navbar-nav:before,
  .navbar-vertical-left ul.navbar-nav:after {
    display: none;
  }


  .navbar-vertical-left ul.navbar-nav>li {
    display: table-row;
    float: none;
  }

  .navbar-vertical-left ul.navbar-nav>li>a {
    display: table-cell;
    vertical-align: middle;
  }

  .navbar-vertical-left ul.navbar-nav>li>a>i.fa {
    margin-right: 20px;
  }

  /* Цвета */

  .navbar-vertical-left {
    background: #ffffff;
    color: #35ce96;
    ;
  }

  .navbar-vertical-left ul.navbar-nav>li>a {
    color: #35ce96;
  }

  .navbar-vertical-left ul.navbar-nav>li>a.one:hover,
  .navbar-vertical-left ul.navbar-nav>li>a.one:active {
    background: #f8f8f8;
  }

  .navbar-vertical-left ul.navbar-nav>li>a.two:hover,
  .navbar-vertical-left ul.navbar-nav>li>a.two:active {
    background: #f8f8f8;
  }

  .navbar-vertical-left ul.navbar-nav>li>a.tree:hover,
  .navbar-vertical-left ul.navbar-nav>li>a.tree:active {
    background: #f8f8f8;
  }

  .navbar-vertical-left ul.navbar-nav>li>a.for:hover,
  .navbar-vertical-left ul.navbar-nav>li>a.for:active {
    background: #f8f8f8;
  }

  .navbar-vertical-left ul.navbar-nav>li>a.five:hover,
  .navbar-vertical-left ul.navbar-nav>li>a.five:active {
    background: #f8f8f8;
  }

  .navbar-vertical-left ul.navbar-nav>li>a.six:hover,
  .navbar-vertical-left ul.navbar-nav>li>a.six:active {
    background: #f8f8f8;
  }

  .navbar-vertical-left ul.navbar-nav>li>a.selected {
    background: #f8f8f8;
  }

  /* Анимация */

  .navbar-vertical-left {
    -webkit-transition: -webkit-transform .3s;
    -moz-transition: -moz-transform .3s;
    transition: transform .3s;

    -webkit-transform: translateX(-220px);
    -moz-transform: translateX(-220px);
    transform: translateX(-220px);
  }

  .navbar-vertical-left:hover {
    -webkit-transform: translateX(0px);
    -moz-transform: translateX(0px);
    transform: translateX(0px);
  }

  .navbar-vertical-left ul.navbar-nav {
    -webkit-transition: -webkit-transform .3s;
    -moz-transition: -moz-transform .3s;
    transition: transform .3s;

    -webkit-transform: translateX(220px);
    -moz-transform: translateX(220px);
    transform: translateX(220px);
  }

  .navbar-vertical-left:hover ul.navbar-nav {
    -webkit-transform: translateX(0px);
    -moz-transform: translateX(0px);
    transform: translateX(0px);
  }

  .info h4 {

    margin-left: 180px;
    margin-right: 170px;
    font-size: 20px;
    padding-top: 10px;
  }

  .info h3 {
    margin-left: 240px;
    margin-right: 170px;
    font-size: 19px;
    padding-top: auto;
  }

  .info h5 {
    margin-right: 500px;
  }

  /* Изменения для разрешений */

  @media(max-width: 768px) {
    .navbar-vertical-left {
      position: fixed;
      top: auto;
      bottom: 0;
      height: auto;
      width: 100%;
    }

    .navbar-vertical-left,
    .navbar-vertical-left ul.navbar-nav {
      -webkit-transition: none;
      -moz-transition: none;
      transition: none;
      -webkit-transform: none;
      -moz-transform: none;
      transform: none;
    }

    .navbar-vertical-left ul.navbar-nav>li {
      display: table-cell;
    }


    .navbar-vertical-left ul.navbar-nav>li>a>i.fa {
      margin: 0;
    }

    .navbar-vertical-left ul.navbar-nav>li>a>span {
      display: none;
    }
  }
</style>