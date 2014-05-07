// #pragma strict

// 	public var speed : float;
// 	public var gravity : float;
// 	public var arrow : GameObject;
// 	public var target : GameObject;
// 	public var COEFF_GRAVITY : int = 10000;

// 	function Start () {
// 		speed = 0.1;
// 		gravity = 9.8;
// 	}

// 	function Update () {
// 		arrow = GameObject.Find("Arrow");
// 		target = GameObject.Find("Target");
// 		// speed -= gravity/COEFF_GRAVITY;

// 		// if(arrow.transform.position.y >= 0){
// 		// 	arrow.transform.position.y = -speed*Mathf.Pow(arrow.transform.position.x, 2.0) + 0.9;
// 		// 	if (speed >= 0) {
// 		// 		arrow.transform.position.x += speed;
// 		// 	}
// 		// }

// 		arrow.transform.rotation = Quaternion.LookRotation(target.transform.position - arrow.transform.position) * Quaternion.AngleAxis(90, arrow.transform.up);
// 	}

var StartPointX: float;
var StartPointY: float;
var ControlPointX1: float;
var ControlPointY1: float;
// var ControlPointX2: float;
// var ControlPointY2: float;
var EndPointX : float;
var EndPointY : float;
var CurveX:float;
var CurveY: float;
var CurveX0:float;
var CurveY0:float;
var BezierTime: float = 0;
var arrow: GameObject;
var target: GameObject;
var repere: GameObject;

arrow = GameObject.Find("Arrow");
target = GameObject.Find("Target");
repere = GameObject.Find("Repère");


function Update() {

	Debug.DrawLine(Vector3(arrow.transform.position.x, arrow.transform.position.y, -3), Vector3(repere.transform.position.x, repere.transform.position.y, -3), Color.blue, 2, true);
	// Debug.DrawLine(Vector3(0, 2, -3), Vector3(0, 2, -3), Color.blue, 2, true);


	CurveX0 = CurveX;
	CurveY0 = CurveY;

	StartPointX = -4;
	StartPointY = -1;
	ControlPointX1 = 0;
	ControlPointY1 = 2;
	// ControlPointX2 = 3;
	// ControlPointY2 = 2;
	EndPointX = target.transform.position.x;
	EndPointY = target.transform.position.y;

    BezierTime = BezierTime + Time.deltaTime/2;
 
    if (BezierTime >= 1)
    {
        BezierTime = 0;
    }

    // CurveX = (StartPointX*(Mathf.Pow(1 - BezierTime, 3.0)) + (3*ControlPointX1*BezierTime)*(Mathf.Pow(1 - BezierTime, 2.0)) + (3*ControlPointX2*(Mathf.Pow(BezierTime, 2.0)*(1 - BezierTime))) + (EndPointX*(Mathf.Pow(BezierTime, 3.0))));
    // CurveY = StartPointY*(Mathf.Pow(1 - BezierTime, 3.0)) + (3*ControlPointY1*BezierTime)*(Mathf.Pow(1 - BezierTime, 2.0)) + (3*ControlPointY2*(Mathf.Pow(BezierTime, 2.0)*(1 - BezierTime))) + (EndPointY*(Mathf.Pow(BezierTime, 3.0)));

    CurveX = (Mathf.Pow(1 - BezierTime, 2.0) * StartPointX) + (2*BezierTime*(1 - BezierTime)*repere.transform.position.x) + (Mathf.Pow(BezierTime, 2.0)*EndPointX);
    CurveY = (Mathf.Pow(1 - BezierTime, 2.0) * StartPointY) + (2*BezierTime*(1 - BezierTime)*repere.transform.position.y) + (Mathf.Pow(BezierTime, 2.0)*EndPointY);

    arrow.transform.position = Vector3(CurveX, CurveY, -3);

    if (Time.frameCount >= 1) {
    	Debug.DrawLine(Vector3(CurveX0, CurveY0, -3),Vector3(CurveX, CurveY, -3), Color.red, 2, true);
    }

}  