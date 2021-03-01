gdjs.GameCode = {};
gdjs.GameCode.forEachIndex2 = 0;

gdjs.GameCode.forEachObjects2 = [];

gdjs.GameCode.forEachTemporary2 = null;

gdjs.GameCode.forEachTotalCount2 = 0;

gdjs.GameCode.GDPlayerObjects1= [];
gdjs.GameCode.GDPlayerObjects2= [];
gdjs.GameCode.GDPlayerObjects3= [];
gdjs.GameCode.GDPlayerObjects4= [];
gdjs.GameCode.GDGroundObjects1= [];
gdjs.GameCode.GDGroundObjects2= [];
gdjs.GameCode.GDGroundObjects3= [];
gdjs.GameCode.GDGroundObjects4= [];
gdjs.GameCode.GDMarketObjects1= [];
gdjs.GameCode.GDMarketObjects2= [];
gdjs.GameCode.GDMarketObjects3= [];
gdjs.GameCode.GDMarketObjects4= [];
gdjs.GameCode.GDObstacleObjects1= [];
gdjs.GameCode.GDObstacleObjects2= [];
gdjs.GameCode.GDObstacleObjects3= [];
gdjs.GameCode.GDObstacleObjects4= [];
gdjs.GameCode.GDMarketWindowObjects1= [];
gdjs.GameCode.GDMarketWindowObjects2= [];
gdjs.GameCode.GDMarketWindowObjects3= [];
gdjs.GameCode.GDMarketWindowObjects4= [];
gdjs.GameCode.GDMarketTabButtonObjects1= [];
gdjs.GameCode.GDMarketTabButtonObjects2= [];
gdjs.GameCode.GDMarketTabButtonObjects3= [];
gdjs.GameCode.GDMarketTabButtonObjects4= [];
gdjs.GameCode.GDDarkOverlayObjects1= [];
gdjs.GameCode.GDDarkOverlayObjects2= [];
gdjs.GameCode.GDDarkOverlayObjects3= [];
gdjs.GameCode.GDDarkOverlayObjects4= [];
gdjs.GameCode.GDMoneyTextObjects1= [];
gdjs.GameCode.GDMoneyTextObjects2= [];
gdjs.GameCode.GDMoneyTextObjects3= [];
gdjs.GameCode.GDMoneyTextObjects4= [];
gdjs.GameCode.GDMarketButtonsObjects1= [];
gdjs.GameCode.GDMarketButtonsObjects2= [];
gdjs.GameCode.GDMarketButtonsObjects3= [];
gdjs.GameCode.GDMarketButtonsObjects4= [];
gdjs.GameCode.GDCoinsObjects1= [];
gdjs.GameCode.GDCoinsObjects2= [];
gdjs.GameCode.GDCoinsObjects3= [];
gdjs.GameCode.GDCoinsObjects4= [];
gdjs.GameCode.GDSoilObjects1= [];
gdjs.GameCode.GDSoilObjects2= [];
gdjs.GameCode.GDSoilObjects3= [];
gdjs.GameCode.GDSoilObjects4= [];
gdjs.GameCode.GDRaccoonIconObjects1= [];
gdjs.GameCode.GDRaccoonIconObjects2= [];
gdjs.GameCode.GDRaccoonIconObjects3= [];
gdjs.GameCode.GDRaccoonIconObjects4= [];
gdjs.GameCode.GDRaccoonTextObjects1= [];
gdjs.GameCode.GDRaccoonTextObjects2= [];
gdjs.GameCode.GDRaccoonTextObjects3= [];
gdjs.GameCode.GDRaccoonTextObjects4= [];
gdjs.GameCode.GDPitchforkObjects1= [];
gdjs.GameCode.GDPitchforkObjects2= [];
gdjs.GameCode.GDPitchforkObjects3= [];
gdjs.GameCode.GDPitchforkObjects4= [];
gdjs.GameCode.GDRaccoonObjects1= [];
gdjs.GameCode.GDRaccoonObjects2= [];
gdjs.GameCode.GDRaccoonObjects3= [];
gdjs.GameCode.GDRaccoonObjects4= [];
gdjs.GameCode.GDBottomBarObjects1= [];
gdjs.GameCode.GDBottomBarObjects2= [];
gdjs.GameCode.GDBottomBarObjects3= [];
gdjs.GameCode.GDBottomBarObjects4= [];
gdjs.GameCode.GDRaccoonToggleObjects1= [];
gdjs.GameCode.GDRaccoonToggleObjects2= [];
gdjs.GameCode.GDRaccoonToggleObjects3= [];
gdjs.GameCode.GDRaccoonToggleObjects4= [];
gdjs.GameCode.GDComingSoonObjects1= [];
gdjs.GameCode.GDComingSoonObjects2= [];
gdjs.GameCode.GDComingSoonObjects3= [];
gdjs.GameCode.GDComingSoonObjects4= [];
gdjs.GameCode.GDRadioObjects1= [];
gdjs.GameCode.GDRadioObjects2= [];
gdjs.GameCode.GDRadioObjects3= [];
gdjs.GameCode.GDRadioObjects4= [];
gdjs.GameCode.GDSaveTheFarmObjects1= [];
gdjs.GameCode.GDSaveTheFarmObjects2= [];
gdjs.GameCode.GDSaveTheFarmObjects3= [];
gdjs.GameCode.GDSaveTheFarmObjects4= [];
gdjs.GameCode.GDPriceObjects1= [];
gdjs.GameCode.GDPriceObjects2= [];
gdjs.GameCode.GDPriceObjects3= [];
gdjs.GameCode.GDPriceObjects4= [];

gdjs.GameCode.conditionTrue_0 = {val:false};
gdjs.GameCode.condition0IsTrue_0 = {val:false};
gdjs.GameCode.condition1IsTrue_0 = {val:false};
gdjs.GameCode.condition2IsTrue_0 = {val:false};
gdjs.GameCode.condition3IsTrue_0 = {val:false};
gdjs.GameCode.condition4IsTrue_0 = {val:false};
gdjs.GameCode.condition5IsTrue_0 = {val:false};
gdjs.GameCode.condition6IsTrue_0 = {val:false};
gdjs.GameCode.conditionTrue_1 = {val:false};
gdjs.GameCode.condition0IsTrue_1 = {val:false};
gdjs.GameCode.condition1IsTrue_1 = {val:false};
gdjs.GameCode.condition2IsTrue_1 = {val:false};
gdjs.GameCode.condition3IsTrue_1 = {val:false};
gdjs.GameCode.condition4IsTrue_1 = {val:false};
gdjs.GameCode.condition5IsTrue_1 = {val:false};
gdjs.GameCode.condition6IsTrue_1 = {val:false};


gdjs.GameCode.eventsList0 = function(runtimeScene) {

{


gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(6)) == 0;
}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
gdjs.GameCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(5)) == 0;
}}
if (gdjs.GameCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("RaccoonToggle"), gdjs.GameCode.GDRaccoonToggleObjects2);
{runtimeScene.getVariables().getFromIndex(5).setNumber(1);
}{runtimeScene.getVariables().getFromIndex(6).setNumber(1);
}{for(var i = 0, len = gdjs.GameCode.GDRaccoonToggleObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDRaccoonToggleObjects2[i].setString("Yes");
}
}}

}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(6)) == 0;
}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
gdjs.GameCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(5)) == 1;
}}
if (gdjs.GameCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("RaccoonToggle"), gdjs.GameCode.GDRaccoonToggleObjects1);
{runtimeScene.getVariables().getFromIndex(5).setNumber(0);
}{runtimeScene.getVariables().getFromIndex(6).setNumber(1);
}{for(var i = 0, len = gdjs.GameCode.GDRaccoonToggleObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDRaccoonToggleObjects1[i].setString("No");
}
}}

}


};gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDRadioObjects1Objects = Hashtable.newFrom({"Radio": gdjs.GameCode.GDRadioObjects1});gdjs.GameCode.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.GameCode.GDRadioObjects1, gdjs.GameCode.GDRadioObjects2);


gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDRadioObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDRadioObjects2[i].isCurrentAnimationName("Off") ) {
        gdjs.GameCode.condition0IsTrue_0.val = true;
        gdjs.GameCode.GDRadioObjects2[k] = gdjs.GameCode.GDRadioObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDRadioObjects2.length = k;}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
gdjs.GameCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(7)) == "Yes";
}}
if (gdjs.GameCode.condition1IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDRadioObjects2 */
{for(var i = 0, len = gdjs.GameCode.GDRadioObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDRadioObjects2[i].setAnimationName("On");
}
}{runtimeScene.getVariables().getFromIndex(7).setString("No");
}{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "Lobo Loco - Walz with an Elf (ID 1507).mp3", 1, false, 40, 1);
}}

}


{

/* Reuse gdjs.GameCode.GDRadioObjects1 */

gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(7)) == "Yes";
}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDRadioObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDRadioObjects1[i].isCurrentAnimationName("On") ) {
        gdjs.GameCode.condition1IsTrue_0.val = true;
        gdjs.GameCode.GDRadioObjects1[k] = gdjs.GameCode.GDRadioObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDRadioObjects1.length = k;}}
if (gdjs.GameCode.condition1IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDRadioObjects1 */
{for(var i = 0, len = gdjs.GameCode.GDRadioObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDRadioObjects1[i].setAnimationName("Off");
}
}{runtimeScene.getVariables().getFromIndex(7).setString("No");
}{gdjs.evtTools.sound.stopMusicOnChannel(runtimeScene, 1);
}}

}


};gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.GameCode.GDPlayerObjects1});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDObstacleObjects1Objects = Hashtable.newFrom({"Obstacle": gdjs.GameCode.GDObstacleObjects1});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDObstacleObjects1Objects = Hashtable.newFrom({"Obstacle": gdjs.GameCode.GDObstacleObjects1});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.GameCode.GDPlayerObjects1});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDMarketObjects1Objects = Hashtable.newFrom({"Market": gdjs.GameCode.GDMarketObjects1});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDMarketObjects1Objects = Hashtable.newFrom({"Market": gdjs.GameCode.GDMarketObjects1});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDDarkOverlayObjects1Objects = Hashtable.newFrom({"DarkOverlay": gdjs.GameCode.GDDarkOverlayObjects1});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDMarketTabButtonObjects1Objects = Hashtable.newFrom({"MarketTabButton": gdjs.GameCode.GDMarketTabButtonObjects1});gdjs.GameCode.eventsList2 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("MarketTabButton"), gdjs.GameCode.GDMarketTabButtonObjects1);

gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
gdjs.GameCode.condition2IsTrue_0.val = false;
gdjs.GameCode.condition3IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDMarketTabButtonObjects1Objects, runtimeScene, true, false);
}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
gdjs.GameCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.GameCode.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDMarketTabButtonObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDMarketTabButtonObjects1[i].isCurrentAnimationName("Buy") ) {
        gdjs.GameCode.condition2IsTrue_0.val = true;
        gdjs.GameCode.GDMarketTabButtonObjects1[k] = gdjs.GameCode.GDMarketTabButtonObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDMarketTabButtonObjects1.length = k;}if ( gdjs.GameCode.condition2IsTrue_0.val ) {
{
{gdjs.GameCode.conditionTrue_1 = gdjs.GameCode.condition3IsTrue_0;
gdjs.GameCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8186500);
}
}}
}
}
if (gdjs.GameCode.condition3IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(1).setNumber(2);
}}

}


};gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDMarketTabButtonObjects1Objects = Hashtable.newFrom({"MarketTabButton": gdjs.GameCode.GDMarketTabButtonObjects1});gdjs.GameCode.eventsList3 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("MarketTabButton"), gdjs.GameCode.GDMarketTabButtonObjects1);

gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
gdjs.GameCode.condition2IsTrue_0.val = false;
gdjs.GameCode.condition3IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDMarketTabButtonObjects1Objects, runtimeScene, true, false);
}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
gdjs.GameCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.GameCode.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDMarketTabButtonObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDMarketTabButtonObjects1[i].isCurrentAnimationName("Sell") ) {
        gdjs.GameCode.condition2IsTrue_0.val = true;
        gdjs.GameCode.GDMarketTabButtonObjects1[k] = gdjs.GameCode.GDMarketTabButtonObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDMarketTabButtonObjects1.length = k;}if ( gdjs.GameCode.condition2IsTrue_0.val ) {
{
{gdjs.GameCode.conditionTrue_1 = gdjs.GameCode.condition3IsTrue_0;
gdjs.GameCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8188828);
}
}}
}
}
if (gdjs.GameCode.condition3IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(1).setNumber(1);
}}

}


};gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.GameCode.GDPlayerObjects1});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDSoilObjects1Objects = Hashtable.newFrom({"Soil": gdjs.GameCode.GDSoilObjects1});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDSoilObjects1Objects = Hashtable.newFrom({"Soil": gdjs.GameCode.GDSoilObjects1});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.GameCode.GDPlayerObjects1});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDSoilObjects1Objects = Hashtable.newFrom({"Soil": gdjs.GameCode.GDSoilObjects1});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDSoilObjects1Objects = Hashtable.newFrom({"Soil": gdjs.GameCode.GDSoilObjects1});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDMarketObjects1Objects = Hashtable.newFrom({"Market": gdjs.GameCode.GDMarketObjects1});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDBottomBarObjects1Objects = Hashtable.newFrom({"BottomBar": gdjs.GameCode.GDBottomBarObjects1});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDPitchforkObjects1Objects = Hashtable.newFrom({"Pitchfork": gdjs.GameCode.GDPitchforkObjects1});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDPitchforkObjects1Objects = Hashtable.newFrom({"Pitchfork": gdjs.GameCode.GDPitchforkObjects1});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDRaccoonObjects1Objects = Hashtable.newFrom({"Raccoon": gdjs.GameCode.GDRaccoonObjects1});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDRaccoonObjects3Objects = Hashtable.newFrom({"Raccoon": gdjs.GameCode.GDRaccoonObjects3});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDRaccoonObjects3Objects = Hashtable.newFrom({"Raccoon": gdjs.GameCode.GDRaccoonObjects3});gdjs.GameCode.eventsList4 = function(runtimeScene) {

{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(9)) == 0;
}if (gdjs.GameCode.condition0IsTrue_0.val) {
gdjs.GameCode.GDRaccoonObjects3.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDRaccoonObjects3Objects, gdjs.randomInRange(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene), gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) + 30), gdjs.randomInRange(0, gdjs.evtTools.window.getGameResolutionHeight(runtimeScene) + 30), "");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "RaccoonSpawn");
}{for(var i = 0, len = gdjs.GameCode.GDRaccoonObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDRaccoonObjects3[i].setZOrder(39);
}
}}

}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(9)) == 1;
}if (gdjs.GameCode.condition0IsTrue_0.val) {
gdjs.GameCode.GDRaccoonObjects3.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDRaccoonObjects3Objects, gdjs.randomInRange(0 - 30, 0), gdjs.randomInRange(0 - 30, gdjs.evtTools.window.getGameResolutionHeight(runtimeScene) + 30), "");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "RaccoonSpawn");
}{for(var i = 0, len = gdjs.GameCode.GDRaccoonObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDRaccoonObjects3[i].setZOrder(39);
}
}}

}


};gdjs.GameCode.eventsList5 = function(runtimeScene) {

};gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDRaccoonObjects2Objects = Hashtable.newFrom({"Raccoon": gdjs.GameCode.GDRaccoonObjects2});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDSoilObjects2Objects = Hashtable.newFrom({"Soil": gdjs.GameCode.GDSoilObjects2});gdjs.GameCode.eventsList6 = function(runtimeScene) {

};gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDRaccoonObjects2Objects = Hashtable.newFrom({"Raccoon": gdjs.GameCode.GDRaccoonObjects2});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDSoilObjects2Objects = Hashtable.newFrom({"Soil": gdjs.GameCode.GDSoilObjects2});gdjs.GameCode.eventsList7 = function(runtimeScene) {

};gdjs.GameCode.eventsList8 = function(runtimeScene) {

};gdjs.GameCode.eventsList9 = function(runtimeScene) {

};gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDMarketButtonsObjects1Objects = Hashtable.newFrom({"MarketButtons": gdjs.GameCode.GDMarketButtonsObjects1});gdjs.GameCode.eventsList10 = function(runtimeScene) {

{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.GameCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(0).setNumber(0);
}{runtimeScene.getVariables().getFromIndex(1).setNumber(0);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "RaccoonSpawn");
}}

}


{



}


{


{
gdjs.copyArray(runtimeScene.getObjects("MoneyText"), gdjs.GameCode.GDMoneyTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("RaccoonText"), gdjs.GameCode.GDRaccoonTextObjects1);
{for(var i = 0, len = gdjs.GameCode.GDMoneyTextObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDMoneyTextObjects1[i].setString(gdjs.evtTools.common.toString(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(2))));
}
}{for(var i = 0, len = gdjs.GameCode.GDRaccoonTextObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDRaccoonTextObjects1[i].setString(gdjs.evtTools.common.toString(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(3))));
}
}}

}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Num9");
}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
{gdjs.GameCode.conditionTrue_1 = gdjs.GameCode.condition1IsTrue_0;
gdjs.GameCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8166732);
}
}}
if (gdjs.GameCode.condition1IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(6).setNumber(0);
}
{ //Subevents
gdjs.GameCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Radio"), gdjs.GameCode.GDRadioObjects1);

gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
gdjs.GameCode.condition2IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDRadioObjects1Objects, runtimeScene, true, false);
}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
gdjs.GameCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.GameCode.condition1IsTrue_0.val ) {
{
{gdjs.GameCode.conditionTrue_1 = gdjs.GameCode.condition2IsTrue_0;
gdjs.GameCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8170244);
}
}}
}
if (gdjs.GameCode.condition2IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(7).setString("Yes");
}
{ //Subevents
gdjs.GameCode.eventsList1(runtimeScene);} //End of subevents
}

}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Num8");
}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
{gdjs.GameCode.conditionTrue_1 = gdjs.GameCode.condition1IsTrue_0;
gdjs.GameCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8174340);
}
}}
if (gdjs.GameCode.condition1IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(2).add(10000);
}}

}


{



}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "w");
}if (gdjs.GameCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects1[i].getBehavior("TopDownMovement").simulateUpKey();
}
}}

}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "d");
}if (gdjs.GameCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects1[i].getBehavior("TopDownMovement").simulateRightKey();
}
}}

}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "s");
}if (gdjs.GameCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects1[i].getBehavior("TopDownMovement").simulateDownKey();
}
}}

}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "a");
}if (gdjs.GameCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects1[i].getBehavior("TopDownMovement").simulateLeftKey();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Obstacle"), gdjs.GameCode.GDObstacleObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects1);

gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDPlayerObjects1Objects, gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDObstacleObjects1Objects, false, runtimeScene, false);
}if (gdjs.GameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDObstacleObjects1 */
/* Reuse gdjs.GameCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects1[i].separateFromObjectsList(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDObstacleObjects1Objects, false);
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Market"), gdjs.GameCode.GDMarketObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects1);

gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
gdjs.GameCode.condition2IsTrue_0.val = false;
gdjs.GameCode.condition3IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDPlayerObjects1Objects, gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDMarketObjects1Objects, false, runtimeScene, false);
}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
gdjs.GameCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDMarketObjects1Objects, runtimeScene, true, false);
}if ( gdjs.GameCode.condition1IsTrue_0.val ) {
{
gdjs.GameCode.condition2IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.GameCode.condition2IsTrue_0.val ) {
{
{gdjs.GameCode.conditionTrue_1 = gdjs.GameCode.condition3IsTrue_0;
gdjs.GameCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8179532);
}
}}
}
}
if (gdjs.GameCode.condition3IsTrue_0.val) {
gdjs.GameCode.GDDarkOverlayObjects1.length = 0;

{runtimeScene.getVariables().getFromIndex(1).setNumber(1);
}{runtimeScene.getVariables().getFromIndex(0).setNumber(1);
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDDarkOverlayObjects1Objects, 0, 0, "");
}{for(var i = 0, len = gdjs.GameCode.GDDarkOverlayObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDDarkOverlayObjects1[i].setOpacity(100);
}
}{for(var i = 0, len = gdjs.GameCode.GDDarkOverlayObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDDarkOverlayObjects1[i].setWidth(gdjs.evtTools.window.getWindowInnerWidth());
}
}{for(var i = 0, len = gdjs.GameCode.GDDarkOverlayObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDDarkOverlayObjects1[i].setHeight(gdjs.evtTools.window.getWindowInnerHeight());
}
}}

}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Escape");
}if (gdjs.GameCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("DarkOverlay"), gdjs.GameCode.GDDarkOverlayObjects1);
{runtimeScene.getVariables().getFromIndex(0).setNumber(0);
}{runtimeScene.getVariables().getFromIndex(1).setNumber(0);
}{for(var i = 0, len = gdjs.GameCode.GDDarkOverlayObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDDarkOverlayObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 0;
}if (gdjs.GameCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.setTimeScale(runtimeScene, 1);
}}

}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 1;
}if (gdjs.GameCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.setTimeScale(runtimeScene, 0);
}}

}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) == 0;
}if (gdjs.GameCode.condition0IsTrue_0.val) {
{gdjs.evtTools.camera.hideLayer(runtimeScene, "Sell Market ");
}{gdjs.evtTools.camera.hideLayer(runtimeScene, "Buy Market");
}}

}


{



}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) == 1;
}if (gdjs.GameCode.condition0IsTrue_0.val) {
{gdjs.evtTools.camera.showLayer(runtimeScene, "Sell Market ");
}{gdjs.evtTools.camera.hideLayer(runtimeScene, "Buy Market");
}
{ //Subevents
gdjs.GameCode.eventsList2(runtimeScene);} //End of subevents
}

}


{



}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) == 2;
}if (gdjs.GameCode.condition0IsTrue_0.val) {
{gdjs.evtTools.camera.showLayer(runtimeScene, "Buy Market");
}{gdjs.evtTools.camera.hideLayer(runtimeScene, "Sell Market ");
}
{ //Subevents
gdjs.GameCode.eventsList3(runtimeScene);} //End of subevents
}

}


{



}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("Soil"), gdjs.GameCode.GDSoilObjects1);

gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
gdjs.GameCode.condition2IsTrue_0.val = false;
gdjs.GameCode.condition3IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDPlayerObjects1Objects, gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDSoilObjects1Objects, false, runtimeScene, false);
}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
gdjs.GameCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDSoilObjects1Objects, runtimeScene, true, false);
}if ( gdjs.GameCode.condition1IsTrue_0.val ) {
{
gdjs.GameCode.condition2IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Right");
}if ( gdjs.GameCode.condition2IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDSoilObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDSoilObjects1[i].getAnimation() == 0 ) {
        gdjs.GameCode.condition3IsTrue_0.val = true;
        gdjs.GameCode.GDSoilObjects1[k] = gdjs.GameCode.GDSoilObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDSoilObjects1.length = k;}}
}
}
if (gdjs.GameCode.condition3IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDSoilObjects1 */
{for(var i = 0, len = gdjs.GameCode.GDSoilObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDSoilObjects1[i].setAnimation(1);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "zapsplat_food_seeds_packet_black_chia_pick_up_001_35356.mp3", false, 40, 1);
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("Soil"), gdjs.GameCode.GDSoilObjects1);

gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
gdjs.GameCode.condition2IsTrue_0.val = false;
gdjs.GameCode.condition3IsTrue_0.val = false;
gdjs.GameCode.condition4IsTrue_0.val = false;
gdjs.GameCode.condition5IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDPlayerObjects1Objects, gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDSoilObjects1Objects, false, runtimeScene, false);
}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
gdjs.GameCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDSoilObjects1Objects, runtimeScene, true, false);
}if ( gdjs.GameCode.condition1IsTrue_0.val ) {
{
gdjs.GameCode.condition2IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Right");
}if ( gdjs.GameCode.condition2IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDSoilObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDSoilObjects1[i].getAnimation() != 0 ) {
        gdjs.GameCode.condition3IsTrue_0.val = true;
        gdjs.GameCode.GDSoilObjects1[k] = gdjs.GameCode.GDSoilObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDSoilObjects1.length = k;}if ( gdjs.GameCode.condition3IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDSoilObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDSoilObjects1[i].hasAnimationEnded() ) {
        gdjs.GameCode.condition4IsTrue_0.val = true;
        gdjs.GameCode.GDSoilObjects1[k] = gdjs.GameCode.GDSoilObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDSoilObjects1.length = k;}if ( gdjs.GameCode.condition4IsTrue_0.val ) {
{
{gdjs.GameCode.conditionTrue_1 = gdjs.GameCode.condition5IsTrue_0;
gdjs.GameCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8192620);
}
}}
}
}
}
}
if (gdjs.GameCode.condition5IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDSoilObjects1 */
{for(var i = 0, len = gdjs.GameCode.GDSoilObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDSoilObjects1[i].setAnimationName("Empty");
}
}{runtimeScene.getVariables().getFromIndex(2).add(120);
}{gdjs.evtTools.sound.playSound(runtimeScene, "Coins.mp3", false, 40, 1);
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("BottomBar"), gdjs.GameCode.GDBottomBarObjects1);
gdjs.copyArray(runtimeScene.getObjects("Market"), gdjs.GameCode.GDMarketObjects1);

gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
gdjs.GameCode.condition2IsTrue_0.val = false;
gdjs.GameCode.condition3IsTrue_0.val = false;
gdjs.GameCode.condition4IsTrue_0.val = false;
gdjs.GameCode.condition5IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
gdjs.GameCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDMarketObjects1Objects, runtimeScene, true, true);
}if ( gdjs.GameCode.condition1IsTrue_0.val ) {
{
gdjs.GameCode.condition2IsTrue_0.val = !(gdjs.evtTools.camera.layerIsVisible(runtimeScene, "Sell Market "));
}if ( gdjs.GameCode.condition2IsTrue_0.val ) {
{
gdjs.GameCode.condition3IsTrue_0.val = !(gdjs.evtTools.camera.layerIsVisible(runtimeScene, "Buy Market"));
}if ( gdjs.GameCode.condition3IsTrue_0.val ) {
{
gdjs.GameCode.condition4IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDBottomBarObjects1Objects, runtimeScene, true, true);
}if ( gdjs.GameCode.condition4IsTrue_0.val ) {
{
{gdjs.GameCode.conditionTrue_1 = gdjs.GameCode.condition5IsTrue_0;
gdjs.GameCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8194972);
}
}}
}
}
}
}
if (gdjs.GameCode.condition5IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Pitchfork"), gdjs.GameCode.GDPitchforkObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects1[i].getBehavior("FireBullet").FireTowardPosition((gdjs.GameCode.GDPlayerObjects1[i].getPointX("")), (gdjs.GameCode.GDPlayerObjects1[i].getPointY("")), gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDPitchforkObjects1Objects, gdjs.evtTools.input.getMouseX(runtimeScene, "", 0), gdjs.evtTools.input.getMouseY(runtimeScene, "", 0), 350, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "zapsplat_foley_stick_bendy_whoosh_air_fast_003_12683.mp3", false, 25, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Pitchfork"), gdjs.GameCode.GDPitchforkObjects1);
gdjs.copyArray(runtimeScene.getObjects("Raccoon"), gdjs.GameCode.GDRaccoonObjects1);

gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDPitchforkObjects1Objects, gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDRaccoonObjects1Objects, false, runtimeScene, false);
}if (gdjs.GameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDPitchforkObjects1 */
/* Reuse gdjs.GameCode.GDRaccoonObjects1 */
{for(var i = 0, len = gdjs.GameCode.GDRaccoonObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDRaccoonObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.GameCode.GDPitchforkObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDPitchforkObjects1[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getVariables().getFromIndex(3).add(1);
}{gdjs.evtTools.sound.playSound(runtimeScene, "racoon_death.mp3", false, 50, 2);
}}

}


{


{
}

}


{


{
}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Soil"), gdjs.GameCode.GDSoilObjects1);

for(gdjs.GameCode.forEachIndex2 = 0;gdjs.GameCode.forEachIndex2 < gdjs.GameCode.GDSoilObjects1.length;++gdjs.GameCode.forEachIndex2) {
gdjs.GameCode.GDSoilObjects2.length = 0;


gdjs.GameCode.forEachTemporary2 = gdjs.GameCode.GDSoilObjects1[gdjs.GameCode.forEachIndex2];
gdjs.GameCode.GDSoilObjects2.push(gdjs.GameCode.forEachTemporary2);
gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
gdjs.GameCode.condition2IsTrue_0.val = false;
gdjs.GameCode.condition3IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, gdjs.randomInRange(5, 8), "RaccoonSpawn");
}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDSoilObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDSoilObjects2[i].getAnimation() != 0 ) {
        gdjs.GameCode.condition1IsTrue_0.val = true;
        gdjs.GameCode.GDSoilObjects2[k] = gdjs.GameCode.GDSoilObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDSoilObjects2.length = k;}if ( gdjs.GameCode.condition1IsTrue_0.val ) {
{
gdjs.GameCode.condition2IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(5)) == 1;
}if ( gdjs.GameCode.condition2IsTrue_0.val ) {
{
{gdjs.GameCode.conditionTrue_1 = gdjs.GameCode.condition3IsTrue_0;
gdjs.GameCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8198364);
}
}}
}
}
if (gdjs.GameCode.condition3IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(9).setNumber(gdjs.randomInRange(0, 1));
}
{ //Subevents: 
gdjs.GameCode.eventsList4(runtimeScene);} //Subevents end.
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Soil"), gdjs.GameCode.GDSoilObjects1);

for(gdjs.GameCode.forEachIndex2 = 0;gdjs.GameCode.forEachIndex2 < gdjs.GameCode.GDSoilObjects1.length;++gdjs.GameCode.forEachIndex2) {
gdjs.copyArray(runtimeScene.getObjects("Raccoon"), gdjs.GameCode.GDRaccoonObjects2);
gdjs.GameCode.GDSoilObjects2.length = 0;


gdjs.GameCode.forEachTemporary2 = gdjs.GameCode.GDSoilObjects1[gdjs.GameCode.forEachIndex2];
gdjs.GameCode.GDSoilObjects2.push(gdjs.GameCode.forEachTemporary2);
gdjs.GameCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDSoilObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDSoilObjects2[i].getAnimation() != 0 ) {
        gdjs.GameCode.condition0IsTrue_0.val = true;
        gdjs.GameCode.GDSoilObjects2[k] = gdjs.GameCode.GDSoilObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDSoilObjects2.length = k;}if (gdjs.GameCode.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.GameCode.GDRaccoonObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDRaccoonObjects2[i].addForceTowardObject((gdjs.GameCode.GDSoilObjects2.length !== 0 ? gdjs.GameCode.GDSoilObjects2[0] : null), 40, 0);
}
}}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Raccoon"), gdjs.GameCode.GDRaccoonObjects1);

for(gdjs.GameCode.forEachIndex2 = 0;gdjs.GameCode.forEachIndex2 < gdjs.GameCode.GDRaccoonObjects1.length;++gdjs.GameCode.forEachIndex2) {
gdjs.copyArray(runtimeScene.getObjects("Soil"), gdjs.GameCode.GDSoilObjects2);
gdjs.GameCode.GDRaccoonObjects2.length = 0;


gdjs.GameCode.forEachTemporary2 = gdjs.GameCode.GDRaccoonObjects1[gdjs.GameCode.forEachIndex2];
gdjs.GameCode.GDRaccoonObjects2.push(gdjs.GameCode.forEachTemporary2);
gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
gdjs.GameCode.condition2IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDRaccoonObjects2Objects, gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDSoilObjects2Objects, false, runtimeScene, false);
}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDSoilObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDSoilObjects2[i].getAnimation() != 0 ) {
        gdjs.GameCode.condition1IsTrue_0.val = true;
        gdjs.GameCode.GDSoilObjects2[k] = gdjs.GameCode.GDSoilObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDSoilObjects2.length = k;}if ( gdjs.GameCode.condition1IsTrue_0.val ) {
{
{gdjs.GameCode.conditionTrue_1 = gdjs.GameCode.condition2IsTrue_0;
gdjs.GameCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8202868);
}
}}
}
if (gdjs.GameCode.condition2IsTrue_0.val) {
{for(var i = 0, len = gdjs.GameCode.GDRaccoonObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDRaccoonObjects2[i].resetTimer("Eating");
}
}}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Raccoon"), gdjs.GameCode.GDRaccoonObjects1);

for(gdjs.GameCode.forEachIndex2 = 0;gdjs.GameCode.forEachIndex2 < gdjs.GameCode.GDRaccoonObjects1.length;++gdjs.GameCode.forEachIndex2) {
gdjs.copyArray(runtimeScene.getObjects("Soil"), gdjs.GameCode.GDSoilObjects2);
gdjs.GameCode.GDRaccoonObjects2.length = 0;


gdjs.GameCode.forEachTemporary2 = gdjs.GameCode.GDRaccoonObjects1[gdjs.GameCode.forEachIndex2];
gdjs.GameCode.GDRaccoonObjects2.push(gdjs.GameCode.forEachTemporary2);
gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
gdjs.GameCode.condition2IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDRaccoonObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDRaccoonObjects2[i].timerElapsedTime("Eating", 5) ) {
        gdjs.GameCode.condition0IsTrue_0.val = true;
        gdjs.GameCode.GDRaccoonObjects2[k] = gdjs.GameCode.GDRaccoonObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDRaccoonObjects2.length = k;}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
gdjs.GameCode.condition1IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDRaccoonObjects2Objects, gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDSoilObjects2Objects, false, runtimeScene, false);
}if ( gdjs.GameCode.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDSoilObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDSoilObjects2[i].getAnimation() != 0 ) {
        gdjs.GameCode.condition2IsTrue_0.val = true;
        gdjs.GameCode.GDSoilObjects2[k] = gdjs.GameCode.GDSoilObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDSoilObjects2.length = k;}}
}
if (gdjs.GameCode.condition2IsTrue_0.val) {
{for(var i = 0, len = gdjs.GameCode.GDRaccoonObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDRaccoonObjects2[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.GameCode.GDSoilObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDSoilObjects2[i].setAnimation(0);
}
}}
}

}


{


{
{runtimeScene.getVariables().getFromIndex(4).setString("Empty");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Soil"), gdjs.GameCode.GDSoilObjects1);

for(gdjs.GameCode.forEachIndex2 = 0;gdjs.GameCode.forEachIndex2 < gdjs.GameCode.GDSoilObjects1.length;++gdjs.GameCode.forEachIndex2) {
gdjs.GameCode.GDSoilObjects2.length = 0;


gdjs.GameCode.forEachTemporary2 = gdjs.GameCode.GDSoilObjects1[gdjs.GameCode.forEachIndex2];
gdjs.GameCode.GDSoilObjects2.push(gdjs.GameCode.forEachTemporary2);
gdjs.GameCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDSoilObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDSoilObjects2[i].getAnimation() != 0 ) {
        gdjs.GameCode.condition0IsTrue_0.val = true;
        gdjs.GameCode.GDSoilObjects2[k] = gdjs.GameCode.GDSoilObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDSoilObjects2.length = k;}if (gdjs.GameCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(4).setString("NotEmpty");
}}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Raccoon"), gdjs.GameCode.GDRaccoonObjects1);

for(gdjs.GameCode.forEachIndex2 = 0;gdjs.GameCode.forEachIndex2 < gdjs.GameCode.GDRaccoonObjects1.length;++gdjs.GameCode.forEachIndex2) {
gdjs.GameCode.GDRaccoonObjects2.length = 0;


gdjs.GameCode.forEachTemporary2 = gdjs.GameCode.GDRaccoonObjects1[gdjs.GameCode.forEachIndex2];
gdjs.GameCode.GDRaccoonObjects2.push(gdjs.GameCode.forEachTemporary2);
gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(4)) == "Empty";
}if (gdjs.GameCode.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.GameCode.GDRaccoonObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDRaccoonObjects2[i].deleteFromScene(runtimeScene);
}
}}
}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("MarketButtons"), gdjs.GameCode.GDMarketButtonsObjects1);

gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
gdjs.GameCode.condition2IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDMarketButtonsObjects1Objects, runtimeScene, true, false);
}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
gdjs.GameCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.GameCode.condition1IsTrue_0.val ) {
{
gdjs.GameCode.condition2IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(2)) >= 10000;
}}
}
if (gdjs.GameCode.condition2IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDMarketButtonsObjects1 */
gdjs.copyArray(runtimeScene.getObjects("SaveTheFarm"), gdjs.GameCode.GDSaveTheFarmObjects1);
{gdjs.evtTools.sound.playSound(runtimeScene, "Coins.mp3", false, 40, 1);
}{runtimeScene.getVariables().getFromIndex(2).sub(10000);
}{for(var i = 0, len = gdjs.GameCode.GDMarketButtonsObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDMarketButtonsObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.GameCode.GDSaveTheFarmObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDSaveTheFarmObjects1[i].setString("Great job! Grandma can grow strawberries again!");
}
}}

}


};

gdjs.GameCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.GameCode.GDPlayerObjects1.length = 0;
gdjs.GameCode.GDPlayerObjects2.length = 0;
gdjs.GameCode.GDPlayerObjects3.length = 0;
gdjs.GameCode.GDPlayerObjects4.length = 0;
gdjs.GameCode.GDGroundObjects1.length = 0;
gdjs.GameCode.GDGroundObjects2.length = 0;
gdjs.GameCode.GDGroundObjects3.length = 0;
gdjs.GameCode.GDGroundObjects4.length = 0;
gdjs.GameCode.GDMarketObjects1.length = 0;
gdjs.GameCode.GDMarketObjects2.length = 0;
gdjs.GameCode.GDMarketObjects3.length = 0;
gdjs.GameCode.GDMarketObjects4.length = 0;
gdjs.GameCode.GDObstacleObjects1.length = 0;
gdjs.GameCode.GDObstacleObjects2.length = 0;
gdjs.GameCode.GDObstacleObjects3.length = 0;
gdjs.GameCode.GDObstacleObjects4.length = 0;
gdjs.GameCode.GDMarketWindowObjects1.length = 0;
gdjs.GameCode.GDMarketWindowObjects2.length = 0;
gdjs.GameCode.GDMarketWindowObjects3.length = 0;
gdjs.GameCode.GDMarketWindowObjects4.length = 0;
gdjs.GameCode.GDMarketTabButtonObjects1.length = 0;
gdjs.GameCode.GDMarketTabButtonObjects2.length = 0;
gdjs.GameCode.GDMarketTabButtonObjects3.length = 0;
gdjs.GameCode.GDMarketTabButtonObjects4.length = 0;
gdjs.GameCode.GDDarkOverlayObjects1.length = 0;
gdjs.GameCode.GDDarkOverlayObjects2.length = 0;
gdjs.GameCode.GDDarkOverlayObjects3.length = 0;
gdjs.GameCode.GDDarkOverlayObjects4.length = 0;
gdjs.GameCode.GDMoneyTextObjects1.length = 0;
gdjs.GameCode.GDMoneyTextObjects2.length = 0;
gdjs.GameCode.GDMoneyTextObjects3.length = 0;
gdjs.GameCode.GDMoneyTextObjects4.length = 0;
gdjs.GameCode.GDMarketButtonsObjects1.length = 0;
gdjs.GameCode.GDMarketButtonsObjects2.length = 0;
gdjs.GameCode.GDMarketButtonsObjects3.length = 0;
gdjs.GameCode.GDMarketButtonsObjects4.length = 0;
gdjs.GameCode.GDCoinsObjects1.length = 0;
gdjs.GameCode.GDCoinsObjects2.length = 0;
gdjs.GameCode.GDCoinsObjects3.length = 0;
gdjs.GameCode.GDCoinsObjects4.length = 0;
gdjs.GameCode.GDSoilObjects1.length = 0;
gdjs.GameCode.GDSoilObjects2.length = 0;
gdjs.GameCode.GDSoilObjects3.length = 0;
gdjs.GameCode.GDSoilObjects4.length = 0;
gdjs.GameCode.GDRaccoonIconObjects1.length = 0;
gdjs.GameCode.GDRaccoonIconObjects2.length = 0;
gdjs.GameCode.GDRaccoonIconObjects3.length = 0;
gdjs.GameCode.GDRaccoonIconObjects4.length = 0;
gdjs.GameCode.GDRaccoonTextObjects1.length = 0;
gdjs.GameCode.GDRaccoonTextObjects2.length = 0;
gdjs.GameCode.GDRaccoonTextObjects3.length = 0;
gdjs.GameCode.GDRaccoonTextObjects4.length = 0;
gdjs.GameCode.GDPitchforkObjects1.length = 0;
gdjs.GameCode.GDPitchforkObjects2.length = 0;
gdjs.GameCode.GDPitchforkObjects3.length = 0;
gdjs.GameCode.GDPitchforkObjects4.length = 0;
gdjs.GameCode.GDRaccoonObjects1.length = 0;
gdjs.GameCode.GDRaccoonObjects2.length = 0;
gdjs.GameCode.GDRaccoonObjects3.length = 0;
gdjs.GameCode.GDRaccoonObjects4.length = 0;
gdjs.GameCode.GDBottomBarObjects1.length = 0;
gdjs.GameCode.GDBottomBarObjects2.length = 0;
gdjs.GameCode.GDBottomBarObjects3.length = 0;
gdjs.GameCode.GDBottomBarObjects4.length = 0;
gdjs.GameCode.GDRaccoonToggleObjects1.length = 0;
gdjs.GameCode.GDRaccoonToggleObjects2.length = 0;
gdjs.GameCode.GDRaccoonToggleObjects3.length = 0;
gdjs.GameCode.GDRaccoonToggleObjects4.length = 0;
gdjs.GameCode.GDComingSoonObjects1.length = 0;
gdjs.GameCode.GDComingSoonObjects2.length = 0;
gdjs.GameCode.GDComingSoonObjects3.length = 0;
gdjs.GameCode.GDComingSoonObjects4.length = 0;
gdjs.GameCode.GDRadioObjects1.length = 0;
gdjs.GameCode.GDRadioObjects2.length = 0;
gdjs.GameCode.GDRadioObjects3.length = 0;
gdjs.GameCode.GDRadioObjects4.length = 0;
gdjs.GameCode.GDSaveTheFarmObjects1.length = 0;
gdjs.GameCode.GDSaveTheFarmObjects2.length = 0;
gdjs.GameCode.GDSaveTheFarmObjects3.length = 0;
gdjs.GameCode.GDSaveTheFarmObjects4.length = 0;
gdjs.GameCode.GDPriceObjects1.length = 0;
gdjs.GameCode.GDPriceObjects2.length = 0;
gdjs.GameCode.GDPriceObjects3.length = 0;
gdjs.GameCode.GDPriceObjects4.length = 0;

gdjs.GameCode.eventsList10(runtimeScene);
return;

}

gdjs['GameCode'] = gdjs.GameCode;
