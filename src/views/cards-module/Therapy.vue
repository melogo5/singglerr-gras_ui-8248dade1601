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
            <h3> Лекарственная терапия</h3>
        </tr>
        <tr>
          <td>&nbsp;
            <div class="form-group row">
              <label class="col-sm-8 col-form-label"> Антигипертензивная терапия</label>
              <div class="form-check">
                <label class="form-check-label"><input type="radio" id="v11" name="v1" checked> Да
                </label> <label class="form-check-label"><input type="radio" id="v12" name="v1"> Нет
                </label>
              </div>
            </div>
            <div class="form-group row">
              <label class="col-sm-8 col-form-label"> Ингибиторы АПФ</label>
              <div class="form-check">
                <label class="form-check-label"><input type="radio" id="v21" name="v2" checked> Да
                </label> <label class="form-check-label"><input type="radio" id="v22" name="v2"> Нет
                </label>
              </div>
            </div>
            <div class="form-group row">
              <label class="col-sm-8 col-form-label"> Антагонисты рецепторов ангиотензина
              </label>
              <div class="form-check">
                <label class="form-check-label"><input type="radio" id="v31" name="v3" checked> Да
                </label> <label class="form-check-label"><input type="radio" id="v32" name="v3"> Нет
                </label>
              </div>
            </div>
            <div class="form-group row">
              <label class="col-sm-8 col-form-label"> Блокаторы кальциевых каналов</label>
              <div class="form-check">
                <label class="form-check-label"><input type="radio" id="v41" name="v4" checked> Да
                </label> <label class="form-check-label"><input type="radio" id="v42" name="v4"> Нет
                </label>
              </div>
            </div>
            <div class="form-group row">
              <label class="col-sm-8 col-form-label"> Болезнь Бехтерева </label>
              <div class="form-check">
                <label class="form-check-label"><input type="radio" id="v51" name="v5" checked> Да
                </label> <label class="form-check-label"><input type="radio" id="v52" name="v5"> Нет
                </label>
              </div>
            </div>
            <div class="form-group row">
              <label class="col-sm-8 col-form-label"> Диуретики</label>
              <div class="form-check">
                <label class="form-check-label"><input type="radio" id="v61" name="v6" checked> Да
                </label> <label class="form-check-label"><input type="radio" id="v62" name="v6"> Нет
                </label>
              </div>
            </div>
            <div class="form-group row">
              <label class="col-sm-8 col-form-label"> Статины</label>
              <div class="form-check">
                <label class="form-check-label"><input type="radio" id="v71" name="v7" checked> Да
                </label> <label class="form-check-label"><input type="radio" id="v72" name="v7"> Нет
                </label>
              </div>
            </div>
            <div class="form-group row">
              <label class="col-sm-8 col-form-label"> Антигреганты</label>
              <div class="form-check">
                <label class="form-check-label"><input type="radio" id="v81" name="v8" checked> Да
                </label> <label class="form-check-label"><input type="radio" id="v82" name="v8"> Нет
                </label>
              </div>
            </div>
            <div class="form-group row">
              <label class="col-sm-8 col-form-label"> Антикоагулянты</label>
              <div class="form-check">
                <label class="form-check-label"><input type="radio" id="v91" name="v9" checked> Да
                </label> <label class="form-check-label"><input type="radio" id="v92" name="v9"> Нет
                </label>
              </div>
            </div>
            <div class="form-group row">
              <label class="col-sm-8 col-form-label"> Препараты сульфонилмочевины</label>
              <div class="form-check">
                <label class="form-check-label"><input type="radio" id="v101" name="v10" checked> Да
                </label> <label class="form-check-label"><input type="radio" id="v102" name="v10">
                  Нет </label>
              </div>
            </div>


          </td>
          <td>
            <div class="form-group row">
              <label class="col-sm-8 col-form-label"> Бигуаниды</label>
              <div class="form-check">
                <label class="form-check-label"><input type="radio" id="v141" name="v14" checked> Да
                </label> <label class="form-check-label"><input type="radio" id="v142" name="v14">
                  Нет </label>
              </div>
            </div>
            <div class="form-group row">
              <label class="col-sm-8 col-form-label"> Инкретины</label>
              <div class="form-check">
                <label class="form-check-label"><input type="radio" id="v151" name="v15" checked> Да
                </label> <label class="form-check-label"><input type="radio" id="v152" name="v15">
                  Нет </label>
              </div>
            </div>
            <div class="form-group row">
              <label class="col-sm-8 col-form-label"> Другие сахароснижающие
                препараты</label>
              <div class="form-check">
                <label class="form-check-label"><input type="radio" id="v161" name="v16" checked> Да
                </label> <label class="form-check-label"><input type="radio" id="v162" name="v16">
                  Нет </label>
              </div>
            </div>
            <div class="form-group row">
              <label class="col-sm-8 col-form-label"> Нестероидные противовоспалительные
                средства
              </label>
              <div class="form-check">
                <label class="form-check-label"><input type="radio" id="v171" name="v17" checked> Да
                </label> <label class="form-check-label"><input type="radio" id="v172" name="v17">
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
        <div class="col-sm-5"> <a href="лабисследования.html" class="tree">
            <button class="btn btn-block btn-info">Перейти к заполнению "Лабораторные
              исследования"</button>
        </div>
      </td>
    </div>

  </div>
</template>