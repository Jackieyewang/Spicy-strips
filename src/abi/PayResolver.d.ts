/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Contract, ContractTransaction, EventFilter, Signer } from "ethers";
import { Listener, Provider } from "ethers/providers";
import { Arrayish, BigNumber, BigNumberish, Interface } from "ethers/utils";
import {
  TransactionOverrides,
  TypedEventDescription,
  TypedFunctionDescription
} from ".";

interface PayResolverInterface extends Interface {
  functions: {
    payRegistry: TypedFunctionDescription<{ encode([]: []): string }>;

    virtResolver: TypedFunctionDescription<{ encode([]: []): string }>;

    resolvePaymentByConditions: TypedFunctionDescription<{
      encode([_resolvePayRequest]: [Arrayish]): string;
    }>;

    resolvePaymentByVouchedResult: TypedFunctionDescription<{
      encode([_vouchedPayResult]: [Arrayish]): string;
    }>;
  };

  events: {
    ResolvePayment: TypedEventDescription<{
      encodeTopics([payId, amount, resolveDeadline]: [
        Arrayish | null,
        null,
        null
      ]): string[];
    }>;
  };
}

export class PayResolver extends Contract {
  connect(signerOrProvider: Signer | Provider | string): PayResolver;
  attach(addressOrName: string): PayResolver;
  deployed(): Promise<PayResolver>;

  on(event: EventFilter | string, listener: Listener): PayResolver;
  once(event: EventFilter | string, listener: Listener): PayResolver;
  addListener(eventName: EventFilter | string, listener: Listener): PayResolver;
  removeAllListeners(eventName: EventFilter | string): PayResolver;
  removeListener(eventName: any, listener: Listener): PayResolver;

  interface: PayResolverInterface;

  functions: {
    payRegistry(): Promise<string>;

    virtResolver(): Promise<string>;

    resolvePaymentByConditions(
      _resolvePayRequest: Arrayish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    resolvePaymentByVouchedResult(
      _vouchedPayResult: Arrayish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;
  };

  payRegistry(): Promise<string>;

  virtResolver(): Promise<string>;

  resolvePaymentByConditions(
    _resolvePayRequest: Arrayish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  resolvePaymentByVouchedResult(
    _vouchedPayResult: Arrayish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  filters: {
    ResolvePayment(
      payId: Arrayish | null,
      amount: null,
      resolveDeadline: null
    ): EventFilter;
  };

  estimate: {
    payRegistry(): Promise<BigNumber>;

    virtResolver(): Promise<BigNumber>;

    resolvePaymentByConditions(
      _resolvePayRequest: Arrayish
    ): Promise<BigNumber>;

    resolvePaymentByVouchedResult(
      _vouchedPayResult: Arrayish
    ): Promise<BigNumber>;
  };
}