<template>
  <div>
    <div class="info">
      <h4><label col-form-label>КАРТА ПАЦИЕНТА</label></h4>
      <table>
        <tr>
          <td colspan="2" height="30" class="trans">
            <h3>Общие сведения</h3>
        </tr>
        <tr>
          <td>&nbsp;<div class="form-group row">
              <label class="col-sm-4 col-form-label">ФИО пациента</label>
              <div class="col-sm-7">
                <input type="text" id="price" required class="form-control">
              </div>
            </div>
            <div class="form-group row">
              <label class="col-sm-4 col-form-label">Дата рождения</label>
              <div class="col-sm-7">
                <input type="date" class="form-control" max="1971-01-01">
              </div>
            </div>
            <div class="form-group row">
              <label class="col-sm-4 col-form-label">Возраст</label>лет
              <div class="col-sm-3">
                <input type="text" id="square" required class="form-control">
              </div>
            </div>
            <div class="form-group row">
              <label class="col-sm-4 col-form-label">Рост</label>см
              <div class="col-sm-3">
                <input type="text" required class="form-control">
              </div>
            </div>
            <div class="form-group row">
              <label class="col-sm-4 col-form-label">Вес</label>кг
              <div class="col-sm-3">
                <input type="text" required class="form-control">
              </div>
            </div>
          </td>
          <td>
            <div class="form-group row">
              <label class="col-sm-4 col-form-label">Шифр пациента</label>
              <div class="col-sm-7">
                <input type="text" id="price" required class="form-control">
              </div>
            </div>
            <div class="form-group row">
              <label class="col-sm-4 col-form-label">Пол</label>

              <div class="form-check">
                <label class="form-check-label" for="radio1">
                  <input type="radio" class="form-check-input" id="radio1" name="optradio" value="option1" checked> Мужской
                </label>
                <label class="form-check-label" for="radio2">
                  <input type="radio" class="form-check-input" id="radio2" name="optradio" value="option2"> Женский
                </label>
              </div>
            </div>
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
      </table>

      <tr>
        <td colspan="2" height="30" class="trans">
          <h4>Шкала самооценки здоровья</h4>
      </tr>
      <td class="trans">
        <a href="#" class="spoiler-trigger"><span>Инструкция</span></a>
        <div class="spoiler-block">
          <h5> На отрезке линии от 0% (самое плохое здоровье) до 100% (идеальное здоровье).</h5>
          <h5> Пациент отмечает состояние своего здоровья, так как он сам это воспринимает.</h5>


        </div>
      </td>
      <div class="container">
        <div class="col-sm-8">
          <div class="range-slider">
            <input type="range" value="50" min="0" max="100">
            <span class="range-value"></span>
          </div>
        </div>

      </div>
      <td class="trans">
        <div class="col-sm-3">
          <button class="btn btn-block btn-success">Сохранить</button>
        </div>
        <div class="col-sm-5"> <a href="хронзаболевания.html" class="tree">
            <button class="btn btn-block btn-info">Перейти к заполнению "Хронические заболевания"</button>
        </div>
      </td>
    </div>
  </div>
</template>
<script>
  $(document).ready(function () {
    var rangeSlider = function () {
      var slider = $('.range-slider'),
        range = $('.range-slider input[type="range"]'),
        value = $('.range-value');
      slider.each(function () {
        value.each(function () {
          var value = $(this).prev().attr('value');
          $(this).html(value);
        });
        range.on('input', function () {
          $(this).next(value).html(this.value);
        });
      });
    };
    rangeSlider();
  });
</script>