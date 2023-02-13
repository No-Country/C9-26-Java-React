package com.nocountry.backend.utils;

import org.modelmapper.ModelMapper;
import org.modelmapper.convention.MatchingStrategies;
import org.springframework.stereotype.Component;
import java.util.List;
import java.util.stream.Collectors;

@Component
public class MapperUtil {

    private static final ModelMapper modelMapper = new ModelMapper();

    private MapperUtil() {
    }

    public static <T, E> E map(T source, Class<E> typeDestination) {
        ModelMapper modelMapper = new ModelMapper();
        modelMapper.getConfiguration().setMatchingStrategy(MatchingStrategies.STRICT);
        return modelMapper.map(source, typeDestination);
    }

    public static <S, T> List<T> mapList(List<S> source, Class<T> targetTClass) {
        return source.stream().map(element -> modelMapper.map(element, targetTClass)).collect(Collectors.toList());
    }
}
