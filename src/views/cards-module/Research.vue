<template>
  <div>
    <div class="info">
      <div class="form-group row">
        <label class="col-sm-1 col-form-label">Шифр пациента</label>
        <div class="col-sm-1">
          <input type="text" id="price" required class="form-control">
        </div>
      </div>
      <table>
        <tr>
          <td colspan="2" height="30" class="trans">
            <h3>Результаты лабораторных исследований</h3>
        </tr>
        <tr>
          <td>&nbsp;
            <div class="form-group row">
              <label class="col-sm-6 col-form-label"> Глюкоза</label>г/л
              <div class="col-sm-3">
                <input type="text" id="price" required class="form-control">
              </div>
            </div>
            <div class="form-group row">
              <label class="col-sm-6 col-form-label"> Общий белок</label>г/л
              <div class="col-sm-3">
                <input type="text" id="price" required class="form-control">
              </div>
            </div>
            <div class="form-group row">
              <label class="col-sm-6 col-form-label"> Билирубин общий</label>г/л
              <div class="col-sm-3">
                <input type="text" id="price" required class="form-control">
              </div>
            </div>
            <div class="form-group row">
              <label class="col-sm-6 col-form-label"> Креатинин</label>мкмоль/л
              <div class="col-sm-3">
                <input type="text" id="price" required class="form-control">
              </div>
            </div>
            <div class="form-group row">
              <label class="col-sm-6 col-form-label"> Калий</label>
              <div class="col-sm-3">
                <input type="text" id="price" required class="form-control">
              </div>
            </div>
            <div class="form-group row">
              <label class="col-sm-6 col-form-label"> Натрий</label>
              <div class="col-sm-3">
                <input type="text" id="price" required class="form-control">
              </div>
            </div>
            <div class="form-group row">
              <label class="col-sm-6 col-form-label"> Триглицериды</label>ммоль/л
              <div class="col-sm-3">
                <input type="text" id="price" required class="form-control">
              </div>
            </div>
            <div class="form-group row">
              <label class="col-sm-6 col-form-label"> Холестерин общий</label>ммоль/л
              <div class="col-sm-3">
                <input type="text" id="price" required class="form-control">
              </div>
            </div>
          </td>
          <td>

            <div class="form-group row">
              <label class="col-sm-4 col-form-label">Комментарии</label>
              <div class="col-sm-7">
                <input type="text" id="price" required class="form-control">
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
        <tr>
          <td colspan="2" height="30" class="trans">
            <h3>Общий клинический анализ крови + СОЭ</h3>
        </tr>
        <tr>
          <td>&nbsp;
            <div class="form-group row">
              <label class="col-sm-6 col-form-label"> Лейкоциты</label>г/л
              <div class="col-sm-3">
                <input type="text" id="price" required class="form-control">
              </div>
            </div>
            <div class="form-group row">
              <label class="col-sm-6 col-form-label"> Эритроциты</label>10<sup>12</sup>/л
              <div class="col-sm-3">
                <input type="text" id="price" required class="form-control">
              </div>
            </div>
            <div class="form-group row">
              <label class="col-sm-6 col-form-label"> Гемоглобин</label>гр/л
              <div class="col-sm-3">
                <input type="text" id="price" required class="form-control">
              </div>
            </div>
            <div class="form-group row">
              <label class="col-sm-6 col-form-label"> Гематокрит</label>мкмоль/л
              <div class="col-sm-3">
                <input type="text" id="price" required class="form-control">
              </div>
            </div>
            <div class="form-group row">
              <label class="col-sm-6 col-form-label"> Тромбоциты</label>тыс./мкл
              <div class="col-sm-3">
                <input type="text" id="price" required class="form-control">
              </div>
            </div>
            <div class="form-group row">
              <label class="col-sm-6 col-form-label"> СОЭ</label>мм/ч
              <div class="col-sm-3">
                <input type="text" id="price" required class="form-control">
              </div>
            </div>


          </td>
          <td>

            <div class="form-group row">
              <label class="col-sm-4 col-form-label">Комментарии</label>
              <div class="col-sm-7">
                <input type="text" id="price" required class="form-control">
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
      <td class="trans">
        <div class="col-sm-3">
          <button class="btn btn-block btn-success">Сохранить</button>
        </div>
        <div class="col-sm-5"> <a href="динамометрия.html" class="tree">
            <button class="btn btn-block btn-info">Перейти к заполнению "Результаты
              динамометрии"</button></a>
        </div>
      </td>
    </div>
  </div>
</template>