
var StartPointX: float;
var StartPointY: float;

var EndPointX : float;

var CurveX:float;
var CurveY: float;

var BezierTime: float = 0;

var arrow: GameObject;
var target: GameObject;
var repere: GameObject;

var isPressed: boolean = false;

arrow = GameObject.Find("Arrow");
target = GameObject.Find("Target");
repere = GameObject.Find("Repère");

function Update() {
	var mouseV3 = Input.mousePosition;
	mouseV3.z = 7;
	mouseV3 = Camera.main.ScreenToWorldPoint(mouseV3);

	Debug.DrawLine(Vector3(mouseV3.x, mouseV3.y, -3), Vector3(arrow.transform.position.x, arrow.transform.position.y, -3), Color.blue, 2, true);

	if (Input.GetMouseButtonDown(0)){
		isPressed = true;
		mouseX3 = mouseV3.x;
		mouseY3 = mouseV3.y;

		repere.transform.position.x = mouseX3*2;
		repere.transform.position.y = mouseY3*3.3;
		EndPointX = Mathf.Abs(mouseX3*4);
	}

	if (isPressed) {
		BezierTime = BezierTime + Time.deltaTime;
		if (BezierTime >= 1)
			BezierTime = 0;

		CurveX = ((Mathf.Pow(1 - BezierTime, 2.0) * StartPointX) + (2*BezierTime*(1 - BezierTime)*Mathf.Abs(repere.transform.position.x)) + (Mathf.Pow(BezierTime, 2.0)*EndPointX));
		CurveY = (Mathf.Pow(1 - BezierTime, 2.0) * StartPointY) + (2*BezierTime*(1 - BezierTime)*Mathf.Abs(repere.transform.position.y)) + (Mathf.Pow(BezierTime, 2.0)* (-0.5));

		arrow.transform.position = Vector3(CurveX, CurveY, -3);
	}
}
