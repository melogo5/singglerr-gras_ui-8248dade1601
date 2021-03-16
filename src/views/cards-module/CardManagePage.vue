
<template>
  <div>
    <nav class="navbar navbar-default">
      <div class="container">
        <!-- Brand and toggle get grouped for better mobile display -->
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse-2">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <div class="navbar-header">
            <div class="img"><img src="../../assets/cards-module/САГР2.jpg" alt="" width="60" height="60" /></div>
          </div>
          <a class="navbar-brand" href="ведениегериатрическойкарты.html"><strong><big>Модуль "Ведение гериатрических
                карт"</big></strong></a>
        </div>
        <!-- Collect the nav links, forms, and other content for toggling -->
        <div class="collapse navbar-collapse" id="navbar-collapse-2">
          <ul class="nav navbar-nav navbar-right">
            <li>
              <a class="btn btn-default btn-outline btn-circle" data-toggle="collapse" href="#nav-collapse2"
                aria-expanded="false" aria-controls="nav-collapse2">Войти</a>
            </li>
          </ul>
        </div><!-- /.navbar-collapse -->
      </div><!-- /.container -->
    </nav>
    <div class="container">

      <div class="row">
        <nav class="navbar navbar-vertical-left">
          <ul class="nav navbar-nav">
            <li>
              <a href="карта.html" class="one">
                <i class="fa fa-fw fa-lg fa-home"> </i>
                <span>На главную</span>
              </a>
            </li>
            <li>
              <a href="архив.html" class="two">
                <i class="fa fa-fw fa-lg fa-archive"></i>
                <span>Архив карт</span>
              </a>
            </li>
            <li>
              <a href="общиесведения.html" class="two">
                <i class="fa fa-fw fa-lg fa-medkit"></i>
                <span>Общие сведения</span>
              </a>
            </li>
            <li>
              <a href="хронзаболевания.html" class="tree">
                <i class="fa fa-fw fa-lg fa-heartbeat"></i>
                <span>Хронические заболевания</span>
              </a>
            </li>
            <li>
              <a href="лекарственнаятерапия.html" class="for">
                <i class="fa fa-fw fa-lg fa-stethoscope"></i>
                <span>Лекарственная терапия</span>
              </a>
            </li>
            <li>
              <a href="лабисследования.html" class="five">
                <i class="fa fa-fw fa-lg fa-hospital-o"></i>
                <span>Лабораторные исследования</span>
              </a>
            </li>
            <li>
              <a href="динамометрия.html" class="five">
                <i class="fa fa-fw fa-lg fa-plus-square"></i>
                <span>Результаты динамометрии</span>
              </a>
            </li>
            <li>
              <a href="шкаладепрессии.html" class="five">
                <i class="fa fa-fw fa-lg fa-line-chart"></i>
                <span>Шкала депрессии</span>
              </a>
            </li>
            <li>
              <a href="индексбартел.html" class="five">
                <i class="fa fa-fw fa-lg fa-bicycle"></i>
                <span>Индекс Бартел</span>
              </a>
            </li>
            <li>
              <a href="тестчасов.html" class="five">
                <i class="fa fa-fw fa-lg fa-clock-o "></i>
                <span>Тест часов</span>
              </a>
            </li>
            <li>
              <a href="заключение.html" class="six">
                <i class="fa fa-fw fa-lg fa-pencil-square-o"></i>
                <span>Заключение гериатра</span>
              </a>
            </li>
            <li>
              <a href="#" class="six">
                <i class="fa fa-fw fa-lg fa-cog"></i>
                <span>Настройки</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
    <div class="info">

      <table>
        <tr>
          <td class="trans">
            <h4>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Модуль <b>"Ведение гериатрических карт"</b> необходим для
              формирования,
              редактирования, хранения и обработки данных цифровой версии гериатрической карты пациента. </h4>
            <h3>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Комплексная оценка гериатрической карты больного достаточно
              объемна.
              Кроме общих сведений, в ней хранится информация о хронических заболеваниях, лекарственной терапии,
              факторах
              риска хронических неинфекционных заболеваний, о наличии хронической боли, о наличии или отсутствии
              гериатрических синдромов, о проблемах, связанных движением, психическим и физическим состоянием,
              самооценкой
              здоровья, результатами лабораторных исследований, а также заключения врачей, рекомендации пациентам и др.
            </h3>

        </tr>
      </table>
      <div class="col-sm-5"><a href="общиесведения.html" class="tree">
          <div class="img">
            <center><img src="../../assets/cards-module/ведение гериатрических карт.png" alt="" width="250" height="250" /></center>
          </div>
          <a href="общиесведения.html" class="tree">
            <button class="btn btn-block btn-info">Новая карта пациента</button></a>
      </div>
      <div class="col-sm-5">
        <div class="img">
          <center><img src="../../assets/cards-module/архив.png" alt="" width="250" height="250" /></center>
        </div>
        <a href="архив.html" class="tree">
          <button class="btn btn-block btn-info">Архив карт</button>
      </div>  
    </div>
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

    margin-left: 0px;
    margin-right: -100px;
    font-size: 20px;
    padding-top: 10px;
  }

  .info h3 {
    margin-left: 0px;
    margin-right: -100px;
    font-size: 19px;
    padding-top: auto;
  }

  .info {
    margin-left: 280px;

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