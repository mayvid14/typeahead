import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ToFetchService {
  URL = 'http://localhost:9090/store/';

  constructor(private http: HttpClient) { }

  getStores() {
    console.log(this.URL + 'getAll');
    return this.http.get(this.URL + 'getAll');
  }

  getFakeStores() {
    return stores;
  }
}

const stores = [
  {
    'name': 'Lectus Company',
    'location': 'Ap #897-4195 Luctus, Rd.',
    'id': 1
  },
  {
    'name': 'Mus Proin Vel Ltd',
    'location': 'P.O. Box 826, 2842 Magna. Av.',
    'id': 2
  },
  {
    'name': 'Lobortis Class Aptent Incorporated',
    'location': '1848 Lorem Street',
    'id': 3
  },
  {
    'name': 'Consectetuer Euismod LLC',
    'location': '9769 In St.',
    'id': 4
  },
  {
    'name': 'Lectus Company',
    'location': '178-400 Quis St.',
    'id': 5
  },
  {
    'name': 'Phasellus Elit Institute',
    'location': 'P.O. Box 441, 1078 Nam St.',
    'id': 6
  },
  {
    'name': 'Pellentesque Limited',
    'location': '704-4844 Dictum. St.',
    'id': 7
  },
  {
    'name': 'Cubilia Institute',
    'location': '8564 Natoque Road',
    'id': 8
  },
  {
    'name': 'Ac Tellus Incorporated',
    'location': '1443 Mauris Av.',
    'id': 9
  },
  {
    'name': 'Convallis Foundation',
    'location': '3765 Ultrices Avenue',
    'id': 10
  },
  {
    'name': 'Quisque Limited',
    'location': 'Ap #579-3534 Nec, St.',
    'id': 11
  },
  {
    'name': 'Justo Eu Industries',
    'location': '766-434 Sed, St.',
    'id': 12
  },
  {
    'name': 'Risus Quis Consulting',
    'location': '3742 A, Street',
    'id': 13
  },
  {
    'name': 'Donec Elementum Associates',
    'location': '2536 Vulputate, St.',
    'id': 14
  },
  {
    'name': 'Magna Industries',
    'location': '275-424 Tempus St.',
    'id': 15
  },
  {
    'name': 'Risus At Fringilla Inc.',
    'location': '384-2533 Eu, Avenue',
    'id': 16
  },
  {
    'name': 'Duis Company',
    'location': 'P.O. Box 931, 9591 Nec St.',
    'id': 17
  },
  {
    'name': 'Odio Semper Cursus Institute',
    'location': '547-1371 Curabitur Rd.',
    'id': 18
  },
  {
    'name': 'Facilisis Limited',
    'location': 'Ap #468-2322 Dis Street',
    'id': 19
  },
  {
    'name': 'Egestas Hendrerit Neque Consulting',
    'location': '289-6327 Nulla Street',
    'id': 20
  },
  {
    'name': 'Consectetuer Consulting',
    'location': '5232 Tempus Av.',
    'id': 21
  },
  {
    'name': 'Rhoncus Proin Nisl Industries',
    'location': '430-6340 Commodo St.',
    'id': 22
  },
  {
    'name': 'Risus Inc.',
    'location': 'Ap #321-2665 Nunc Rd.',
    'id': 23
  },
  {
    'name': 'Malesuada Ut Sem Institute',
    'location': '3421 Nibh. Rd.',
    'id': 24
  },
  {
    'name': 'Phasellus Elit Corporation',
    'location': 'Ap #551-9820 Ipsum Rd.',
    'id': 25
  },
  {
    'name': 'Sem Consequat Nec LLC',
    'location': 'Ap #952-9098 Cras St.',
    'id': 26
  },
  {
    'name': 'At Augue Id Associates',
    'location': '232-4629 Iaculis Av.',
    'id': 27
  },
  {
    'name': 'Nonummy Fusce Ltd',
    'location': '8872 Viverra. Rd.',
    'id': 28
  },
  {
    'name': 'Ut LLC',
    'location': '906-3130 Accumsan St.',
    'id': 29
  },
  {
    'name': 'Nunc Lectus Pede Consulting',
    'location': '7418 Diam St.',
    'id': 30
  },
  {
    'name': 'Cubilia Curae; Phasellus LLC',
    'location': '271-1099 Dolor St.',
    'id': 31
  },
  {
    'name': 'Facilisis Corp.',
    'location': 'Ap #443-4119 Cursus Street',
    'id': 32
  },
  {
    'name': 'Sagittis Duis Gravida Incorporated',
    'location': '7574 Vitae, Av.',
    'id': 33
  },
  {
    'name': 'Eu Inc.',
    'location': '1278 Pellentesque. St.',
    'id': 34
  },
  {
    'name': 'Nulla Semper Tellus Industries',
    'location': '587 Pellentesque Rd.',
    'id': 35
  },
  {
    'name': 'Lorem Ut Aliquam Institute',
    'location': 'Ap #611-6679 At, Rd.',
    'id': 36
  },
  {
    'name': 'At Fringilla Company',
    'location': '6393 Lorem, Ave',
    'id': 37
  },
  {
    'name': 'Tellus Eu Augue Incorporated',
    'location': '469-338 Eget St.',
    'id': 38
  },
  {
    'name': 'Urna Associates',
    'location': 'Ap #928-6554 Pretium Av.',
    'id': 39
  },
  {
    'name': 'Quis Pede Praesent Ltd',
    'location': '465-588 Quisque Av.',
    'id': 40
  },
  {
    'name': 'Non Massa Non Incorporated',
    'location': '7866 Commodo Road',
    'id': 41
  },
  {
    'name': 'Donec LLC',
    'location': '2751 Lorem. Road',
    'id': 42
  },
  {
    'name': 'Orci Sem Eget Limited',
    'location': '715-291 Mollis St.',
    'id': 43
  },
  {
    'name': 'Duis A Mi Limited',
    'location': 'Ap #419-3441 Nec, Street',
    'id': 44
  },
  {
    'name': 'At Iaculis Quis Incorporated',
    'location': 'P.O. Box 311, 4425 Nulla Av.',
    'id': 45
  },
  {
    'name': 'Iaculis Quis Pede Consulting',
    'location': 'Ap #692-1070 Accumsan Rd.',
    'id': 46
  },
  {
    'name': 'Mauris Non Foundation',
    'location': 'Ap #273-966 Eget Road',
    'id': 47
  },
  {
    'name': 'Et Inc.',
    'location': 'Ap #334-2399 A, Rd.',
    'id': 48
  },
  {
    'name': 'Id Corporation',
    'location': '120-300 Nulla Road',
    'id': 49
  },
  {
    'name': 'Gravida Nunc LLP',
    'location': 'P.O. Box 266, 3520 Aenean Road',
    'id': 50
  },
  {
    'name': 'Rhoncus Donec Est Associates',
    'location': 'Ap #277-1693 Eleifend Street',
    'id': 51
  },
  {
    'name': 'Dolor Ltd',
    'location': 'Ap #399-306 Magna Ave',
    'id': 52
  },
  {
    'name': 'Etiam Vestibulum Industries',
    'location': '2131 Neque Av.',
    'id': 53
  },
  {
    'name': 'Nec Urna Corp.',
    'location': 'P.O. Box 907, 5350 Dignissim St.',
    'id': 54
  },
  {
    'name': 'Proin Vel Arcu Ltd',
    'location': 'Ap #184-6559 Ut Rd.',
    'id': 55
  },
  {
    'name': 'Donec At Institute',
    'location': '471-2805 Nunc Street',
    'id': 56
  },
  {
    'name': 'Eu Accumsan PC',
    'location': 'P.O. Box 253, 9893 Sem Ave',
    'id': 57
  },
  {
    'name': 'Ante Incorporated',
    'location': 'Ap #841-4841 A, Avenue',
    'id': 58
  },
  {
    'name': 'In Corp.',
    'location': 'Ap #130-5691 Egestas. St.',
    'id': 59
  },
  {
    'name': 'Eget Massa Ltd',
    'location': '7087 Dignissim. Avenue',
    'id': 60
  },
  {
    'name': 'Amet Lorem Associates',
    'location': 'Ap #593-7951 Nunc Avenue',
    'id': 61
  },
  {
    'name': 'Suspendisse Aliquet Sem Associates',
    'location': '7208 Pellentesque St.',
    'id': 62
  },
  {
    'name': 'Luctus Ltd',
    'location': 'Ap #235-1911 Donec St.',
    'id': 63
  },
  {
    'name': 'Et Nunc LLP',
    'location': '8398 Ut Avenue',
    'id': 64
  },
  {
    'name': 'Donec Industries',
    'location': 'P.O. Box 809, 3045 Congue, Av.',
    'id': 65
  },
  {
    'name': 'Vel Convallis Institute',
    'location': 'P.O. Box 210, 6466 Quisque Rd.',
    'id': 66
  },
  {
    'name': 'Quis Incorporated',
    'location': '2315 Quis Ave',
    'id': 67
  },
  {
    'name': 'Sit Amet Corporation',
    'location': 'Ap #877-2920 Orci. Street',
    'id': 68
  },
  {
    'name': 'Faucibus Id Libero LLC',
    'location': 'P.O. Box 878, 9222 Odio. Avenue',
    'id': 69
  },
  {
    'name': 'Molestie Dapibus Corp.',
    'location': '665-1498 Pellentesque St.',
    'id': 70
  },
  {
    'name': 'Consequat Nec LLP',
    'location': '9029 Ornare, St.',
    'id': 71
  },
  {
    'name': 'Ac Mattis Velit LLC',
    'location': 'P.O. Box 695, 8103 Per Road',
    'id': 72
  },
  {
    'name': 'Elit Pellentesque A LLC',
    'location': '6366 Ullamcorper, Rd.',
    'id': 73
  },
  {
    'name': 'Diam Nunc Corp.',
    'location': '4589 Vivamus Street',
    'id': 74
  },
  {
    'name': 'Imperdiet LLP',
    'location': '501-6578 Nunc St.',
    'id': 75
  },
  {
    'name': 'Risus Morbi Metus Foundation',
    'location': 'P.O. Box 291, 8284 Fringilla Ave',
    'id': 76
  },
  {
    'name': 'Sed Associates',
    'location': 'P.O. Box 619, 2653 Aliquam Av.',
    'id': 77
  },
  {
    'name': 'Luctus Inc.',
    'location': 'P.O. Box 432, 457 Justo Rd.',
    'id': 78
  },
  {
    'name': 'Mauris Integer Corp.',
    'location': 'P.O. Box 325, 4709 Cursus Rd.',
    'id': 79
  },
  {
    'name': 'Eu Dui Cum Institute',
    'location': 'P.O. Box 175, 3868 Imperdiet, Av.',
    'id': 80
  },
  {
    'name': 'Iaculis Enim Sit Limited',
    'location': '7119 Urna Av.',
    'id': 81
  },
  {
    'name': 'Ornare Lectus Inc.',
    'location': '6228 Vestibulum Rd.',
    'id': 82
  },
  {
    'name': 'Augue Ac PC',
    'location': '501-3431 Diam Avenue',
    'id': 83
  },
  {
    'name': 'Ut Cursus Luctus PC',
    'location': 'Ap #211-7250 Dolor. St.',
    'id': 84
  },
  {
    'name': 'Ipsum Leo Institute',
    'location': '844-3661 At Ave',
    'id': 85
  },
  {
    'name': 'Et Ltd',
    'location': 'Ap #390-360 Rhoncus. Rd.',
    'id': 86
  },
  {
    'name': 'Orci Inc.',
    'location': 'P.O. Box 643, 9209 Quisque Road',
    'id': 87
  },
  {
    'name': 'At Pede Cras LLC',
    'location': 'Ap #417-736 Et, Ave',
    'id': 88
  },
  {
    'name': 'Purus Associates',
    'location': 'Ap #251-6075 Lacus. St.',
    'id': 89
  },
  {
    'name': 'Malesuada Augue Consulting',
    'location': 'Ap #381-726 Pharetra, St.',
    'id': 90
  },
  {
    'name': 'Proin Vel Nisl Industries',
    'location': 'Ap #913-9722 In Road',
    'id': 91
  },
  {
    'name': 'Integer Vitae Incorporated',
    'location': 'P.O. Box 997, 1258 Eleifend St.',
    'id': 92
  },
  {
    'name': 'Vestibulum Industries',
    'location': '694-5320 A Av.',
    'id': 93
  },
  {
    'name': 'Auctor PC',
    'location': 'P.O. Box 556, 7323 Cum Av.',
    'id': 94
  },
  {
    'name': 'Interdum Company',
    'location': '6627 In Avenue',
    'id': 95
  },
  {
    'name': 'Interdum Curabitur Corp.',
    'location': '509-6382 Mauris, St.',
    'id': 96
  },
  {
    'name': 'Nulla Integer Ltd',
    'location': 'P.O. Box 594, 3308 Tempor Ave',
    'id': 97
  },
  {
    'name': 'Libero Ltd',
    'location': '6443 Gravida St.',
    'id': 98
  },
  {
    'name': 'Orci Luctus LLC',
    'location': 'P.O. Box 261, 3169 Dui St.',
    'id': 99
  },
  {
    'name': 'Amet Foundation',
    'location': 'Ap #928-5767 Suspendisse Road',
    'id': 100
  }
];
