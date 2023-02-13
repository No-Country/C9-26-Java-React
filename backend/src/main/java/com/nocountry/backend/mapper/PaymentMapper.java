package com.nocountry.backend.mapper;
import com.nocountry.backend.dto.PaymentDto;
import com.nocountry.backend.model.Payment;
import com.nocountry.backend.utils.MapperUtil;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class PaymentMapper {

    public PaymentDto convertToDto(Payment payment) {
        return MapperUtil.map(payment, PaymentDto.class);
    }

    public Payment convertDtoToEntity(PaymentDto paymentDTO) {
        return MapperUtil.map(paymentDTO, Payment.class);
    }

    public List<PaymentDto> convertToDtoList(List<Payment> paymentList) {
        return MapperUtil.mapList(paymentList, PaymentDto.class);
    }

    public List<Payment> convertToEntityList(List<PaymentDto> paymentDto) {
        return MapperUtil.mapList(paymentDto, Payment.class);
    }
}
