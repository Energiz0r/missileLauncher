/**
 * Created by tommy.kristoffersen on 18.09.2014.
 */
var usb = require('usb');

var list = usb.getDeviceList();
console.log('COUNT: ' + list.length);
for(var i = 0; i < list.length-1; i++){
    var item = list[i];
    console.log('VENDOR: ' + item.deviceDescriptor.idVendor);
    console.log('PRODUCT: ' +item.deviceDescriptor.idProduct);
    console.log('-----------------------');
}

console.log('OPENING first')
var device = usb.findByIds(8483, 4112);
device.open();
console.log(device.endpoints);

console.log('OPENING second')
var device2 = usb.findByIds(1423, 25172);
device2.open();
console.log(device2.endpoints);

console.log('OPENING third')
var device3 = usb.findByIds(3141, 25360);
device3.open();
console.log(device3.endpoints);

//device.OutEndpoint.transfer([0x02, 0x10, 0x00,0x00,0x00,0x00,0x00,0x00], function(){})
//console.log(device.interfaces);



//ID'er: 4112, 25172, 25360. Hva de gjør veit jeg ikke, en kamera, en kontrollen, en strøm?