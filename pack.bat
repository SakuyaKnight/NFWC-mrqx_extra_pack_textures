@echo off
:: ����ǰ�ļ���mod����
echo "����mod�ļ�"
xcopy "%~dp0\mods" "%~dp0\.tempMod" /s/e/i/q >nul
:: ˢ��packwiz״̬
echo "���Curseforge Mod"
packwiz curseforge detect >nul
echo "ˢ��packwiz״̬"
packwiz refresh >nul
:: ���չ��򵼳����ϰ�
echo "Curseforge�汾����"
packwiz curseforge export
:: ��ԭmod�ļ�
echo "��ԭmod�ļ�"
del "%~dp0\mods\*.*" /q >nul
xcopy "%~dp0\.tempMod" "%~dp0\mods" /s/e >nul
rd "%~dp0\.tempMod" /s/q >nul
pause
@echo on