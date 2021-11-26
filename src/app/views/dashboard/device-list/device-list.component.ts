import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Device } from 'src/app/model/Device.model';
import { DeviceService } from 'src/app/_service/device.service';
import { FormsModule } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import {enableProdMode} from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-device-list',
  templateUrl: './device-list.component.html',
  styleUrls: ['./device-list.component.scss']
})

export class DeviceListComponent implements OnInit {
  closeResult :any;
  devices: any = [];
  device: Device;
  deviceLoaded: boolean = false;

  constructor(private deviceService: DeviceService, private router: Router, private toastr: ToastrService,private modalService: NgbModal) { }

  ngOnInit(): void {
    
    this.getAllDevicesList()
    
  }
  getAllDevicesList() {

    this.deviceService.getAllDevices().subscribe(data => {

      console.log("###########################")

      console.log(data)

      this.devices = data;
      console.log(this.devices)


    })



  }
  refresh(): void {
    window.location.reload();
  }
  showSuccess() {
    this.toastr.success('Your device has been successfully added!', 'Well Done!');
  }
  showFaild() {
    this.toastr.warning('Deleted! ', 'Warning');
  }


  deleteDevice(id: String) {
    this.deviceService.deleteDevice(id).subscribe();

    this.showFaild()



  };
  updateDevice(id: String, f: any) {
    console.log(f)
    this.deviceService.updateDevice(f.value).pipe().subscribe(data => {  console.log(data), 
      this.device = data;
     });

  }
  open(content:any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }


}
