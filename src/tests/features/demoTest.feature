Feature: Challenge Interbanking

  Scenario: Busqueda de iPhone 13 en Mercado Libre
    Given Soy un usuario interesado en comprar un iPhone 13 con un almacenamiento en especifico
    When Ingreso al sitio de Mercado Libre y busco el producto
    And Agrego el filtro segun el almacenamiento buscado
    Then Quiero realizar una busqueda personalizada y verificar que puedo comprar el producto pidiendome ingresar mi usuario

  Scenario: Busqueda de iPhone 13 en Mercado Libre
    Given Soy un usuario interesado en comprar un iPhone 13 con un almacenamiento en especifico
    When Ingreso al sitio de Mercado Libre y busco el producto
    And Agrego los filtros segun el almacenamiento buscado y envio gratis
    Then Quiero realizar una busqueda personalizada y verificar que puedo comprar el producto pidiendome ingresar mi usuario

@Fail
  Scenario: Busqueda de iPhone 13 en Mercado Libre
    Given Soy un usuario interesado en comprar un iPhone 13 con un almacenamiento inexistente en el mercado
    When Ingreso al sitio de Mercado Libre y busco el producto
    And Agrego el filtro para un almacenamiento no existente en el mercado
    Then Se espera mensaje de error al no existir el almacenamiento buscado
