/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Contract, Signer } from "ethers";
import { Provider } from "ethers/providers";

import { PayResolver } from "./PayResolver";

export class PayResolverFactory {
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): PayResolver {
    return new Contract(address, _abi, signerOrProvider) as PayResolver;
  }
}

const _abi = [
  {
    constant: true,
    inputs: [],
    name: "payRegistry",
    outputs: [
      {
        name: "",
        type: "address"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "virtResolver",
    outputs: [
      {
        name: "",
        type: "address"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        name: "_registryAddr",
        type: "address"
      },
      {
        name: "_virtResolverAddr",
        type: "address"
      }
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "constructor"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "payId",
        type: "bytes32"
      },
      {
        indexed: false,
        name: "amount",
        type: "uint256"
      },
      {
        indexed: false,
        name: "resolveDeadline",
        type: "uint256"
      }
    ],
    name: "ResolvePayment",
    type: "event"
  },
  {
    constant: false,
    inputs: [
      {
        name: "_resolvePayRequest",
        type: "bytes"
      }
    ],
    name: "resolvePaymentByConditions",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        name: "_vouchedPayResult",
        type: "bytes"
      }
    ],
    name: "resolvePaymentByVouchedResult",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  }
];
