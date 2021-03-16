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
            <h3>Хронические заболевания</h3>
        </tr>
        <tr>
          <td>&nbsp;
            <div class="form-group row">
              <label class="col-sm-8 col-form-label">Артериальная гипертензия</label>
              <div class="form-check">
                <label class="form-check-label"><input type="radio" id="v11" name="v1" checked> Да
                </label> <label class="form-check-label"><input type="radio" id="v12" name="v1"> Нет
                </label>
              </div>
            </div>
            <div class="form-group row">
              <label class="col-sm-8 col-form-label">Ишемическая болезнь сердца</label>
              <div class="form-check">
                <label class="form-check-label"><input type="radio" id="v21" name="v2" checked> Да
                </label> <label class="form-check-label"><input type="radio" id="v22" name="v2"> Нет
                </label>
              </div>
            </div>
            <div class="form-group row">
              <label class="col-sm-8 col-form-label">Инфаркт миокарда</label>
              <div class="form-check">
                <label class="form-check-label"><input type="radio" id="v31" name="v3" checked> Да
                </label> <label class="form-check-label"><input type="radio" id="v32" name="v3"> Нет
                </label>
              </div>
            </div>
            <div class="form-group row">
              <label class="col-sm-8 col-form-label">Хроническая сердечная недостаточность</label>
              <div class="form-check">
                <label class="form-check-label"><input type="radio" id="v41" name="v4" checked> Да
                </label> <label class="form-check-label"><input type="radio" id="v42" name="v4"> Нет
                </label>
              </div>
            </div>
            <div class="form-group row">
              <label class="col-sm-8 col-form-label">Острые нарушения мозгового кровообращения</label>
              <div class="form-check">
                <label class="form-check-label"><input type="radio" id="v51" name="v5" checked> Да
                </label> <label class="form-check-label"><input type="radio" id="v52" name="v5"> Нет
                </label>
              </div>
            </div>
            <div class="form-group row">
              <label class="col-sm-8 col-form-label">Хронические облитерирующие заболевания артерий
                нижних конечностей </label>
              <div class="form-check">
                <label class="form-check-label"><input type="radio" id="v61" name="v6" checked> Да
                </label> <label class="form-check-label"><input type="radio" id="v62" name="v6"> Нет
                </label>
              </div>
            </div>
            <div class="form-group row">
              <label class="col-sm-8 col-form-label">Сахарный диабет</label>
              <div class="form-check">
                <label class="form-check-label"><input type="radio" id="v71" name="v7" checked> Да
                </label> <label class="form-check-label"><input type="radio" id="v72" name="v7"> Нет
                </label>
              </div>
              <label class="col-sm-8 col-form-label">Длительность</label>лет
              <div class="col-sm-2">
                <input type="text" id="sd" required class="form-control">
              </div>

            </div>
            <div class="form-group row">
              <label class="col-sm-8 col-form-label">Остеоартроз</label>
              <div class="form-check">
                <label class="form-check-label"><input type="radio" id="v81" name="v8" checked> Да
                </label> <label class="form-check-label"><input type="radio" id="v82" name="v8"> Нет
                </label>
              </div>
            </div>
            <div class="form-group row">
              <label class="col-sm-8 col-form-label">Ревматоидный артрит</label>
              <div class="form-check">
                <label class="form-check-label"><input type="radio" id="v91" name="v9" checked> Да
                </label> <label class="form-check-label"><input type="radio" id="v92" name="v9"> Нет
                </label>
              </div>
            </div>
            <div class="form-group row">
              <label class="col-sm-8 col-form-label">Бронхиальная астма</label>
              <div class="form-check">
                <label class="form-check-label"><input type="radio" id="v101" name="v10" checked> Да
                </label> <label class="form-check-label"><input type="radio" id="v102" name="v10">
                  Нет </label>
              </div>
            </div>
            <div class="form-group row">
              <label class="col-sm-8 col-form-label">Дыхательная недостаточность</label>
              <div class="form-check">
                <label class="form-check-label"><input type="radio" id="v111" name="v11" checked> Да
                </label> <label class="form-check-label"><input type="radio" id="v112" name="v11">
                  Нет </label>
              </div>
            </div>

          </td>
          <td>
            <div class="form-group row">
              <label class="col-sm-8 col-form-label">Онкологические заболевания</label>
              <div class="form-check">
                <label class="form-check-label"><input type="radio" id="v121" name="v12" checked> Да
                </label> <label class="form-check-label"><input type="radio" id="v122" name="v12">
                  Нет </label>
              </div>
              <label class="col-sm-4 col-form-label">Локализация, лечение</label>
              <div class="col-sm-7">
                <input type="text" id="ll" required class="form-control">
              </div>
            </div>
            <div class="form-group row">
              <label class="col-sm-8 col-form-label">Анемия</label>
              <div class="form-check">
                <label class="form-check-label"><input type="radio" id="v131" name="v13" checked> Да
                </label> <label class="form-check-label"><input type="radio" id="v132" name="v13">
                  Нет </label>
              </div>
            </div>
            <div class="form-group row">
              <label class="col-sm-8 col-form-label">Язвенная болезнь</label>
              <div class="form-check">
                <label class="form-check-label"><input type="radio" id="v141" name="v14" checked> Да
                </label> <label class="form-check-label"><input type="radio" id="v142" name="v14">
                  Нет </label>
              </div>
            </div>
            <div class="form-group row">
              <label class="col-sm-8 col-form-label">Снижение слуха</label>
              <div class="form-check">
                <label class="form-check-label"><input type="radio" id="v151" name="v15" checked> Да
                </label> <label class="form-check-label"><input type="radio" id="v152" name="v15">
                  Нет </label>
              </div>
            </div>
            <div class="form-group row">
              <label class="col-sm-8 col-form-label">Снижение зрения</label>
              <div class="form-check">
                <label class="form-check-label"><input type="radio" id="v161" name="v16" checked> Да
                </label> <label class="form-check-label"><input type="radio" id="v162" name="v16">
                  Нет </label>
              </div>
            </div>
            <div class="form-group row">
              <label class="col-sm-8 col-form-label">Катаракта</label>
              <div class="form-check">
                <label class="form-check-label"><input type="radio" id="v171" name="v17" checked> Да
                </label> <label class="form-check-label"><input type="radio" id="v172" name="v17">
                  Нет </label>
              </div>
            </div>
            <div class="form-group row">
              <label class="col-sm-8 col-form-label">Трофические язвы / пролежни</label>
              <div class="form-check">
                <label class="form-check-label"><input type="radio" id="v181" name="v18" checked> Да
                </label> <label class="form-check-label"><input type="radio" id="v182" name="v18">
                  Нет </label>
              </div>
            </div>
            <div class="form-group row">
              <label class="col-sm-8 col-form-label">Запоры</label>
              <div class="form-check">
                <label class="form-check-label"><input type="radio" id="v191" name="v19" checked> Да
                </label> <label class="form-check-label"><input type="radio" id="v192" name="v19">
                  Нет </label>
              </div>
            </div>
            <div class="form-group row">
              <label class="col-sm-4 col-form-label">Другое</label>
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
        <div class="col-sm-5"> <a href="лекарственнаятерапия.html" class="tree">
            <button class="btn btn-block btn-info">Перейти к заполнению "Лекарственная терапия"</button>
        </div>
      </td>
    </div>
  </div>
</template>