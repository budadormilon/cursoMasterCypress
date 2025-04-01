Feature: Demo de Cucumber con parametros

    Aca se puede poner una descripcion de como utilizar Cucumber con parametros

    Scenario Outline: Demo de Cucumber Inicio Con Parametros
        Given Abrir el navegador principal
        When cargamos el nombre <nombre>
        And cargamos el email <email>
        And cargamos la direccion <direccion> <direccion2>
        And click en boton
        Then validar que <nombre> fue cargada 

        Examples:
            | nombre | email            | direccion       | direccion2      |
            | Juan   | juan@example.com | calle_falsa_123 | calle_falsa_456 |
            | Ana    | ana@example.com  | calle_falsa_78  | calle_falsa_90  |
            | Lea    | lea@example.com  | calle_falsa_748 | calle_falsa_98  |
